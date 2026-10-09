/**
 * CI dependency audit gate.
 *
 * Replaces a bare `npm audit --audit-level=high`, which cannot pass while an
 * advisory with no published fix sits in the tree. A gate that can never go
 * green stops being read, so this one fails on every high/critical advisory
 * EXCEPT the ones listed in ACCEPTED below, each with a reason and the
 * condition for removing it.
 *
 * Two properties keep the list honest:
 *   1. Any high/critical advisory that is not accepted fails the build.
 *   2. An accepted entry that no longer matches anything also fails the build,
 *      so an acceptance cannot quietly outlive the problem it documents.
 *
 * Usage: npm run audit:ci
 */

const { execFileSync } = require('child_process');

const BLOCKING_SEVERITIES = ['high', 'critical'];

/**
 * Advisories we have consciously accepted because no fix exists.
 *
 * Every entry needs:
 *   reason     why no fix is coming, and why it does not affect this site
 *   upstream   links to the actual issues, so the next person can check the
 *              state themselves rather than trusting this comment
 *   removeWhen the condition under which this entry should be deleted
 *
 * If you are adding an entry because a fix is merely inconvenient, bump the
 * dependency instead. "No fix exists" means no published version is unaffected.
 *
 * @type {{ghsa: string, cve: string, package: string, reason: string,
 *         upstream: {url: string, what: string}[], removeWhen: string}[]}
 */
const ACCEPTED = [
  {
    ghsa: 'GHSA-vfj7-8cjw-p6xm',
    cve: 'CVE-2026-93687',
    package: 'braces',
    reason: [
      'Stack-exhaustion denial of service: braces walks its AST recursively with',
      'no depth guard, so a deeply nested brace pattern blows the call stack and',
      'kills the Node process with an uncaught RangeError. It caps input at 10,000',
      'characters, but a crash needs only ~3,500 levels of nesting, well inside',
      'that cap.',
      '',
      'WHY NO FIX IS COMING. Every published version of braces is affected; the',
      'advisory range is "*" and the latest release (3.0.3) is vulnerable. There is',
      'nothing to upgrade to. The package author, jonschlinkert, has declined to',
      'patch it and opened an issue on his own repo telling people to read the',
      'dispute before filing more. His argument is that brace patterns are a form',
      'of pattern matching, and limiting nesting depth closes exactly one of many',
      'ways to make pattern matching blow up (flat overlapping wildcards, nested',
      'repetition, negation). A depth cap would therefore be cosmetic. Worth adding',
      'that brace expansion is combinatorial by design: {a,b}{c,d} producing four',
      'strings is the entire purpose of the library, and nesting multiplies. The',
      'blow-up is the feature working.',
      '',
      'The advisory is also formally disputed. A request is open against the GitHub',
      'advisory database asking for no version to be marked affected, on the',
      'grounds that a RangeError is catchable, that braces already throws on bad',
      'input so callers handling untrusted patterns should be catching anyway, and',
      'that the crash is non-deterministic except very close to the length cap.',
      'That request is unresolved, and withdrawal would have to go through the CNA.',
      'Do not assume it will be withdrawn; treat this entry as permanent until the',
      'tooling says otherwise.',
      '',
      'WHY IT DOES NOT AFFECT THIS SITE. The attack needs someone hostile to supply',
      'the pattern. Ours come from our own docusaurus config and our own file tree,',
      'reached through micromatch and chokidar during the build. No external input',
      'becomes a glob pattern anywhere in this repo. The same point is made in the',
      'dispute: build tools and linters use developer-defined globs, not untrusted',
      'ones. And braces runs at build time only. The published site is static HTML',
      'and does not ship it, so there is no runtime exposure to a reader at all.',
      '',
      'Worst realistic case is a broken build on a pattern we wrote ourselves,',
      'which we would see immediately as a failed pipeline.',
    ].join('\n'),
    upstream: [
      {
        url: 'https://github.com/micromatch/braces/issues/70',
        what: 'Original report. Open, no maintainer response.',
      },
      {
        url: 'https://github.com/micromatch/braces/issues/85',
        what: '"CVE - READ THIS FIRST", opened by the package author. Open. States the refusal to patch.',
      },
      {
        url: 'https://github.com/github/advisory-database/issues/10132',
        what: 'Open dispute asking for no version to be marked affected. Unresolved.',
      },
      {
        url: 'https://github.com/advisories/GHSA-vfj7-8cjw-p6xm',
        what: 'The advisory. Patched versions: none. Not withdrawn as at 2026-10-09.',
      },
    ],
    removeWhen: [
      'Docusaurus stops depending on micromatch and chokidar, or the advisory is',
      'withdrawn or re-scoped so npm audit no longer reports it. A braces patch',
      'release is possible but the author has said he will not make one, so do not',
      'wait on it.',
    ].join(' '),
  },
];

/**
 * @returns {object} parsed `npm audit --json` report
 */
function runAudit() {
  let raw;

  try {
    raw = execFileSync('npm', ['audit', '--json'], {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    // npm audit exits non-zero whenever it finds anything; the report is still
    // on stdout and is what we actually want.
    raw = error.stdout;
  }

  if (!raw) {
    throw new Error('npm audit produced no output');
  }

  // npm may print notices around the JSON, so decode from the first brace.
  return JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
}

/**
 * Collect the distinct advisories behind a report, ignoring packages that are
 * flagged only because a dependency of theirs is.
 *
 * @param {object} report parsed npm audit report
 * @returns {Map<string, {ghsa: string, package: string, title: string, severity: string}>}
 */
function collectAdvisories(report) {
  const found = new Map();

  for (const [name, entry] of Object.entries(report.vulnerabilities ?? {})) {
    for (const via of entry.via) {
      if (typeof via !== 'object' || !BLOCKING_SEVERITIES.includes(via.severity)) {
        continue;
      }

      const ghsa = (via.url ?? '').split('/').pop();

      if (ghsa) {
        found.set(ghsa, { ghsa, package: name, title: via.title, severity: via.severity });
      }
    }
  }

  return found;
}

/**
 * @param {string} text
 * @returns {string} text with every line indented, for readable CI logs
 */
function indent(text) {
  return text
    .split('\n')
    .map((line) => (line ? `  ${line}` : ''))
    .join('\n');
}

const report = runAudit();
const found = collectAdvisories(report);
const acceptedByGhsa = new Map(ACCEPTED.map((item) => [item.ghsa, item]));

const unaccepted = [...found.values()].filter((item) => !acceptedByGhsa.has(item.ghsa));
const stale = ACCEPTED.filter((item) => !found.has(item.ghsa));

for (const item of ACCEPTED) {
  if (!found.has(item.ghsa)) {
    continue;
  }

  console.log(`\nACCEPTED  ${item.package}  ${item.ghsa}  ${item.cve}`);
  console.log(indent(item.reason));
  console.log('\n  Upstream:');

  for (const link of item.upstream) {
    console.log(`    ${link.url}`);
    console.log(`      ${link.what}`);
  }

  console.log(`\n  Remove this entry when:\n${indent(item.removeWhen)}`);
}

if (unaccepted.length > 0) {
  console.error(`\n${unaccepted.length} unaccepted high/critical advisory(ies):\n`);

  for (const item of unaccepted) {
    console.error(`  ${item.severity.toUpperCase()}  ${item.package}  ${item.ghsa}`);
    console.error(`      ${item.title}`);
    console.error(`      https://github.com/advisories/${item.ghsa}\n`);
  }

  console.error('Upgrade the package. Only add it to ACCEPTED in scripts/audit-ci.js');
  console.error('if no fixed version exists, with a reason and a removeWhen.\n');
}

if (stale.length > 0) {
  console.error(`\n${stale.length} accepted advisory(ies) no longer present:\n`);

  for (const item of stale) {
    console.error(`  ${item.ghsa}  ${item.package}`);
    console.error(`      Remove it from ACCEPTED in scripts/audit-ci.js.\n`);
  }
}

if (unaccepted.length > 0 || stale.length > 0) {
  process.exit(1);
}

const counts = report.metadata?.vulnerabilities ?? {};
console.log(
  `\nNo unaccepted high/critical advisories. ` +
    `(${counts.critical ?? 0} critical, ${counts.high ?? 0} high, ` +
    `${counts.moderate ?? 0} moderate, ${counts.low ?? 0} low reported by npm audit; ` +
    `all high/critical trace to accepted advisories.)`
);
