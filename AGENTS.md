# AGENTS.md

RZL Online Hilfe — a German documentation site, currently mid-migration from MkDocs Material to Astro + Starlight, deployed to Azure Static Web Apps.

## Migration state — read first

- Production builds `docs/` on `main` with MkDocs; `chore/astro-starlight-migration` replaces that stack with Astro.
- **Keep `docs/` as the pre-cutover authoring source of truth and never delete it; this branch's copy differs from `main`.**
- `src/content/docs/` is migration-derived, not byte-exact fresh output, and includes Astro-only edits as well as the hand-authored MDX homepage.
- PR #212 (`34f82ed`) is incorporated into this branch's `docs/` but unreplayed into Astro; PR #214 (`edd101a`) is still main-only.
- Incorporate outstanding legacy changes before a reviewed content replay, preserving Astro-only edits as described below.

## Commands

```sh
# Astro (migration branch)
pnpm dev            # predev regenerates nav, then astro dev
pnpm build          # prebuild regenerates nav + redirects, then astro build
pnpm check          # astro check
pnpm lint           # ESLint recommended JS/TS/Astro rules
pnpm lint:fix       # apply ESLint fixes
pnpm format:check   # Prettier formatting
pnpm format         # format allowlisted hand-authored code/configuration
pnpm test           # unit tests under scripts/
pnpm validate:urls  # validate content/report/redirects and existing build routes
pnpm exec playwright install --with-deps chromium  # browser + system dependencies
pnpm test:e2e       # requires a fresh pnpm build; owns its preview server
pnpm migrate:content  # re-generate src/content/docs from docs/ — see hazard below

# MkDocs (legacy stack, still live on main)
.venv/bin/mkdocs serve
.venv/bin/mkdocs build --strict
```

Recreate the Python env with `python3 -m venv .venv && .venv/bin/pip install -r requirements.txt`.

- Use `.nvmrc` and `package.json#packageManager` for toolchain pins; `.devcontainer/setup.sh` uses NVM to align the image's Node version exactly with `.nvmrc`.
- Source NVM with `--no-use` before installing the pinned version so a fresh container does not exit early under `set -e`.
- Node 26 requires a separate Corepack install before enabling pnpm; CI and `.devcontainer/setup.sh` provide the bootstrap commands.
- Verify dev-container image tags against the registry rather than inferring their release prefix from the Node version.
- TypeScript 6 is supported by the pinned `@astrojs/check` and `typescript-eslint`; inspect their peer ranges before changing the TypeScript major.
- ESLint scope is configured in `eslint.config.mjs`; Prettier uses the allowlist in `.prettierignore`, excluding both documentation trees and generated artifacts even for explicit file arguments.

## Browser tests

- `playwright.config.ts` runs `e2e/` against a production build on desktop/mobile Chromium because dev mode has no Pagefind index.
- Keep Playwright's preview on port 4322 with `ASTRO_PREVIEW_BACKGROUND=0`, `--ignore-lock`, and `reuseExistingServer: false` so Astro cannot detach or reuse a stale locked server.
- The 404 browser test substitutes Azure's response override locally; it does not verify Azure routing or server-side 301s.

## `pnpm migrate:content` hazard

- After staging the source, `scripts/migrate-content.ts` deletes the configured target tree before writing output, defaulting to `src/content/docs`.
- First compare a throwaway run: `pnpm exec tsx scripts/migrate-content.ts --target=/tmp/opencode/migtest --report=/tmp/opencode/migreport.json`.
- **Before replacing the real tree, preserve the MDX homepage, uncommitted work, and other Astro-only edits**, including the improved alt text in `src/content/docs/fibu-next/rzl-taschenrechner.md`.
- After replacing the real tree, restore the preserved `index.mdx` and remove the generated `index.md` to avoid duplicate homepage routes.
- `index.mdx` uses Starlight's `CardGrid`/`LinkCard` components; other documentation pages remain plain Markdown.
- The script skips `docs/scripts/` and `docs/stylesheets/` (`SKIPPED_ROOT_DIRECTORIES`).

## Generated files — never hand-edit

- `src/nav/sidebar.generated.ts` and `src/nav/programs.generated.ts` come from navigation files and Markdown metadata via `scripts/migrate-nav-from-pages.ts`.
- `staticwebapp.config.json`, `redirects.generated.json` and `public/legacy-redirects.json` come from `migration-report.json` via `scripts/build-redirect-map.ts`.
- All are committed: dev regenerates navigation, build regenerates navigation and redirects, and only content migration rewrites the report.
- The committed report reflects the older replay and retains obsolete statistics; regenerate it with the next reviewed content replay, then regenerate navigation and redirects.

## Never do

- Keep `smartypants: false` in `astro.config.ts` because it otherwise curls quotes before the custom remark plugin and breaks legacy attribute matching.
- Never change `trailingSlash` in `staticwebapp.config.json` from `auto` to `always` — Azure would then redirect `/_astro/*.js` and `/pagefind/*` file requests, breaking Pagefind's relative imports (`astro.config.ts`'s own `trailingSlash: 'always'` is a different, correct setting).
- Do not port the legacy `pdf.css` (`plan.md §7.6`); Starlight's print defaults and small print-specific UI rules are not excluded.

## Content

`AUTOREN-HINWEISE.md` describes post-cutover Astro authoring; until cutover follow the legacy-source policy above, and treat the guide's footer-hiding instructions as unsupported.

- Astro pages take their H1 from frontmatter `title` and must not have a `#` H1 in the body; `scripts/validate-urls.ts` errors on both violations.
- Migration defaults `program:` to the legacy top-level directory name with its original case; a source frontmatter string overrides it and `false` suppresses it.
- Each dropdown ID uses the section's `index.md` program, otherwise its German-sorted first Markdown page, with the directory name as fallback; it must match child-page metadata for filtering to work.
- `src/content/docs/.pages` explicitly lists top-level programs for sidebar groups and dropdown options; omission does not disable search indexing, and root `...` expands only the sidebar.
- Group labels prefer explicit `.pages` labels, then directory `index.md` titles, then humanized directory names.
- A directory without `.pages` defaults to `nav: ['...']`; the generator fails on broken references, duplicate pages, and referenced empty groups.
- Keep images colocated in `img/` to preserve relative links and avoid duplicate-basename collisions (`migration-decisions.md`).
- `scripts/lib/paths.ts` normalizes directories and Markdown filenames to ASCII kebab-case with German transliteration while preserving asset basenames and leaving legacy source names unchanged.
- `hideFooter` has no rendering effect; clipboard annotations create focusable button-like markup but have no copy handler.

## Search — `src/components/ProgramSearch.astro`, `src/components/search/`

- The filter chain is frontmatter `program:` → `MarkdownContent.astro` emits a `data-pagefind-filter` span inside `data-pagefind-body` → Pagefind facet → `programFilter.ts` mirrors the dropdown onto Pagefind's own (CSS-hidden) checkboxes.
- Keep filtering native so result counts, pagination, and matches beyond the rendered results remain correct.
- Result hrefs carry `?highlight=` terms because Starlight strips the backend `highlightParam` option and coordinating runtime initialization is fragile (`searchResultLinks.ts`).
- Search depends on private DOM hooks (`#starlight__search`, `.pagefind-ui__*`, `body[data-search-modal-open]`), so upgrades require browser tests even when builds pass.
- Keep the German overrides in `src/content/i18n/de.json`; the inspected Pagefind bundle's language-detection callback uses a no-op SSR `onMount` hook (`src/content.config.ts`).
- Legacy search spans `overrides/partials/search.html`, `plugins/program_filter.py`, and `docs/scripts/search-filter.js`; preserve intended metadata/UX parity while both stacks are active.

## Markdown plugin — `src/plugins/remark-mkdocs-attributes.ts`

- Colon-prefixed width/target annotations can arrive as three sibling nodes; preserve both split and plain shapes in their handlers and `scripts/plugins/remark-mkdocs-attributes.test.ts` fixtures.
- Keep explicit type imports from `mdast-util-directive` and `mdast-util-to-hast` for MDAST augmentation rather than relying on Starlight's internal types.
- Local `#only-light`/`#only-dark` image suffixes become `.img-light`/`.img-dark` classes whose hiding rules in `src/styles/rzl.css` must outrank `.icon-inline`.

## Redirects

- The generator selects prioritized server-side 301 rules under a safety budget below Azure's 20 KB configuration limit; remaining mappings use JavaScript navigation after a 404, not HTTP 301s.
- Preserve the inline fallback in `src/pages/404.astro` and `/legacy-redirects.json`, which cover most mapped legacy paths.
- Coverage is limited to the older migration report, not all current production URLs; outstanding content replays must also refresh redirect coverage.
- The custom 404 uses `StarlightPage` with Starlight's `disable404Route: true` set in `astro.config.ts`; do not add a competing `src/content/docs/404.md` route.
- Migration rewrites recognized inline Markdown link fragments without emitting legacy DOM aliases, so changed external anchors may fail while unchanged IDs can still work.
- The client fallback currently drops the original query string and fragment when navigating to its mapped target.

## Styling

- `src/styles/rzl.css` is the only `customCss` entry; search styles are imported separately by `ProgramSearch.astro`.
- Brand tokens are `--rzl-green`, `--rzl-red`, `--rzl-yellow`; accent is RZL red, and `caution`/`note` asides are retinted to brand colours.

## CI

- `.github/workflows/build-docs.yml` gates deployment on lint, formatting, Astro check, build, unit tests, URL validation, and Playwright tests.
- Push/PR path filters include browser tests/config, `migration-report.json`, `staticwebapp.config.json`, `.nvmrc`, and devcontainer setup, but not legacy-only `docs/` changes.
- URL validation checks the existing report, content, and redirect artifacts against each other, not their freshness against `main`.

## Commits & PRs

- Use Karma-style messages: `type(scope): imperative, lowercase summary`, such as `feat(search): highlight matching text on result pages`.
- Explain non-obvious reasoning in the commit body and keep unrelated documentation updates in separate commits.

## Maintaining this file

Update AGENTS.md in the same change set whenever a change invalidates a line here or teaches a costly lesson. Prefer deleting over adding, and pointers over prose. One sentence per bullet, current state only, no history. Anything discoverable by reading a file this document already points at does not belong here.
