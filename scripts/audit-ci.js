/**
 * CI dependency audit gate.
 *
 * Wraps `npm audit` so the pipeline fails on any high or critical advisory
 * EXCEPT those explicitly accepted below. A bare `npm audit --audit-level=high`
 * cannot pass while an accepted advisory has no upstream fix, and a gate that
 * can never pass stops being read.
 *
 * Each entry in ACCEPTED must record why it cannot be fixed and what would
 * allow it to be removed. Review them whenever this gate is touched; an entry
 * that no longer matches anything in the audit output is reported as stale and
 * fails the build, so the list cannot rot silently.
 */

const { execFileSync } = require('child_process');

/**
 * Advisories accepted as unfixable. Keyed by GHSA id.
 */
const ACCEPTED = {
  'GHSA-w3rx-r6r6-pgpr': {
    package: 'image-size',
    reason:
      'No patched version is available anywhere. The upstream repository was archived on ' +
      '2026-06-03, a week before these advisories were published, and the Codeberg mirror ' +
      'is archived too with no parser work since the 2.0.2 bump. The maintainer archived it ' +
      'deliberately rather than through neglect, stating they will not "deal with the same ' +
      'LLM generated \'security advisory\' about an infinite loop over and over again", and ' +
      'that they intend to revive the project for "actual issues". Both advisories here are ' +
      'that class of report, so treat their severity as contested upstream rather than settled; ' +
      'this acceptance does not depend on resolving that either way. ' +
      'GitHub reports first_patched_version: NONE, the newest release is 2.0.2 (2025-04-02), ' +
      'and the advisory covers <=2.0.2, so every published version including the 1.2.1 ' +
      'legacy line is affected. Reached only via @docusaurus/mdx-loader, which still pins ' +
      '^2.0.2 as of 3.10.2. Exposure here is three markdown images (one SVG, two PNG), ' +
      'parsed at build time from files already in this repo; the advisories are in the ' +
      'ICNS and JXL/HEIF parsers, which those formats do not reach. Worst case is a hung build.',
    removeWhen:
      'image-size publishes >2.0.2, or docusaurus replaces it: ' +
      'https://github.com/facebook/docusaurus/pull/12235 (draft, breaking) / ' +
      'https://github.com/facebook/docusaurus/issues/12231',
  },
  'GHSA-5p2g-fcmc-qvqq': {
    package: 'image-size',
    reason: 'Second advisory against the same unfixable package; see GHSA-w3rx-r6r6-pgpr.',
    removeWhen: 'Same as GHSA-w3rx-r6r6-pgpr.',
  },
};

const BLOCKING = new Set(['high', 'critical']);

function runAudit() {
  try {
    // npm audit exits non-zero when it finds anything, so capture either way.
    return execFileSync('npm', ['audit', '--json'], {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    if (error.stdout) {
      return error.stdout;
    }
    throw error;
  }
}

function advisoryId(url) {
  return String(url || '').split('/').pop();
}

function main() {
  const report = JSON.parse(runAudit());
  const vulnerabilities = report.vulnerabilities || {};

  const found = new Map();
  for (const entry of Object.values(vulnerabilities)) {
    for (const via of entry.via || []) {
      if (typeof via !== 'object' || !BLOCKING.has(via.severity)) {
        continue;
      }
      const id = advisoryId(via.url);
      if (!found.has(id)) {
        found.set(id, { id, name: via.name, severity: via.severity, title: via.title });
      }
    }
  }

  const blocking = [...found.values()].filter((a) => !ACCEPTED[a.id]);
  const accepted = [...found.values()].filter((a) => ACCEPTED[a.id]);
  const stale = Object.keys(ACCEPTED).filter((id) => !found.has(id));

  for (const a of accepted) {
    console.log(`accepted  ${a.id}  ${a.name} [${a.severity}]  ${ACCEPTED[a.id].reason.split('.')[0]}.`);
  }

  for (const id of stale) {
    console.error(
      `stale     ${id}  no longer reported; remove it from ACCEPTED in scripts/audit-ci.js`
    );
  }

  for (const a of blocking) {
    console.error(`BLOCKING  ${a.id}  ${a.name} [${a.severity}]  ${a.title}`);
  }

  if (blocking.length || stale.length) {
    console.error(
      `\naudit gate failed: ${blocking.length} unaccepted high/critical advisory(ies), ` +
        `${stale.length} stale acceptance(s).`
    );
    process.exit(1);
  }

  console.log(`\naudit gate passed: ${accepted.length} accepted, 0 unaccepted high/critical.`);
}

main();
