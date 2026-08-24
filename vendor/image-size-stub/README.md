# image-size stub

The root `package.json` declares this directory as a `file:` devDependency
named `image-size`, removing the real package from the dependency tree.

## Why

Two high advisories were published against `image-size` on 2026-06-10
(GHSA-w3rx-r6r6-pgpr, GHSA-5p2g-fcmc-qvqq: infinite loops in the ICNS and
JXL/HEIF parsers) and no patched version exists. The upstream repository was
archived on 2026-06-03, GitHub reports `first_patched_version: NONE`, the
newest release is 2.0.2 (2025-04-02), and the advisory range covers every
published version including the 1.2.1 legacy line. The maintainer archived
the project deliberately, stating they would not keep dealing with
LLM-generated infinite-loop advisories, so treat the severity as contested
upstream rather than settled; this stub does not depend on resolving that
either way.

With no fixable version, the CI `npm audit --audit-level=high` job could
never pass while the package stayed in the tree. Replacing the package is
the only in-repo fix.

## How it is wired in

The stub's `package.json` claims the name `image-size` with the fake version
`2.99.0`, which satisfies `@docusaurus/mdx-loader`'s `^2.0.2` range, so
plain npm hoisting dedupes the whole tree onto the top-level
`node_modules/image-size -> vendor/image-size-stub` link. No `overrides`
entry is involved: referencing a `file:` package from the `overrides` block
hits an npm bug (present in npm 9 through 11) where the relative path is
resolved against the *overridden* package's directory, producing a dangling
`node_modules/@docusaurus/mdx-loader/vendor/image-size-stub` link — and it
also crashes older npm outright with `Invalid comparator: file:...`.

## What it does

`@docusaurus/mdx-loader` is the sole consumer
(`lib/remark/transformImage/index.js`), and it uses `image-size/fromFile`
for one thing: adding `width`/`height` attributes to markdown-syntax images
at build time. This repository has exactly three such images (two PNG, one
SVG); everything else uses JSX components, which never reach this code path.

The stub parses PNG and SVG for real, so the built pages are unchanged. Any
other format throws; Docusaurus catches that, logs a warning naming the
image, and the build still succeeds. If the docs ever add a markdown-syntax
image in another format, extend `index.js` (or convert the image to PNG).

## When to remove

Delete this directory and the `image-size` entry in the root `overrides`
block when either:

- Docusaurus stops depending on `image-size`
  (https://github.com/facebook/docusaurus/issues/12231, replacement PR
  https://github.com/facebook/docusaurus/pull/12235), or
- `image-size` publishes a version above 2.0.2 that clears the advisories.
