# AGENTS.md

RZL Online Hilfe — a German documentation site, currently mid-migration from MkDocs Material to Astro + Starlight, deployed to Azure Static Web Apps.

## Migration state — read first

- `main` is the live site and still builds with MkDocs (`pip3 install -r requirements.txt` + `mkdocs build --strict`); branch `chore/astro-starlight-migration` replaces that with Astro.
- **`docs/` is the source of truth and is live production content — never delete it.**
- `src/content/docs/` is *generated* from `docs/` by `pnpm migrate:content`, and is a byte-exact reproduction of that script's output for every file except `404.md` and `index.mdx`.
- Legacy content changes land on `main` in `docs/` and are replayed into `src/content/docs/` by re-running the migration.
- Outstanding replay: PR #212 (`34f82ed`, "LOHN: Verbesserungen I") restructured `docs/LOHN/` but `src/content/docs/lohn/` still has the pre-#212 shape.

## Commands

```sh
# Astro (migration branch)
pnpm dev            # predev regenerates nav, then astro dev
pnpm build          # prebuild regenerates nav + redirects, then astro build
pnpm check          # astro check — CI gate
pnpm test           # tsx --test scripts/**/*.test.ts — NOT run in CI
pnpm migrate:content  # re-generate src/content/docs from docs/ — see hazard below

# MkDocs (legacy stack, still live on main)
.venv/bin/mkdocs serve
.venv/bin/mkdocs build --strict
```

Recreate the Python env with `python3 -m venv .venv && .venv/bin/pip install -r requirements.txt`.

## `pnpm migrate:content` hazard

- It starts by `rm -rf src/content/docs` (`scripts/migrate-content.ts:232`), so everything under it must be regenerable — it currently is, with two exceptions.
- **`src/content/docs/404.md` is hand-authored and is NOT produced by the migration**; it holds the inlined client-side legacy-redirect fallback, so restore it with `git checkout -- src/content/docs/404.md` after every run.
- **`src/content/docs/index.mdx` is hand-authored and is NOT produced by the migration**; it's the homepage's section `CardGrid`/`LinkCard` (needs MDX; every other page stays plain `.md`). After every run: `git checkout -- src/content/docs/index.mdx` and delete the plain `index.md` the migration regenerates from `docs/index.md` in its place (both can't coexist — same route).
- Verify a run against a throwaway target first: `pnpm exec tsx scripts/migrate-content.ts --target=/tmp/migtest --report=/tmp/migreport.json`.
- The script skips `docs/scripts/` and `docs/stylesheets/` (`SKIPPED_ROOT_DIRECTORIES`).

## Generated files — never hand-edit

- `src/nav/sidebar.generated.ts` and `src/nav/programs.generated.ts` come from `src/content/docs/**/.pages` via `scripts/migrate-nav-from-pages.ts`.
- `staticwebapp.config.json`, `redirects.generated.json` and `public/legacy-redirects.json` come from `migration-report.json` via `scripts/build-redirect-map.ts`, and carry no "generated" marker in the file itself.
- `migration-report.json` is written by `pnpm migrate:content` and read by `prebuild`, so it must be regenerated together with the content.
- All of these are committed, so a hand-edit survives until the next `pnpm dev`/`pnpm build` and then vanishes silently.

## Never do

- Never set `smartypants: true` in `astro.config.ts` — it runs before our remark plugins and curls the quotes that `remark-mkdocs-attributes.ts` matches, silently killing ~2200 legacy `{:width="…"}` annotations.
- Never change `trailingSlash` in `staticwebapp.config.json` from `auto` to `always` — Azure would then redirect `/_astro/*.js` and `/pagefind/*` file requests, breaking Pagefind's relative imports (`astro.config.ts`'s own `trailingSlash: 'always'` is a different, correct setting).
- Never delete `<span class="legacy-anchor">` markers when editing a page — they preserve MkDocs heading slugs for old deep links.
- Never restore print/PDF styles in the Astro theme — deliberately dropped, see `plan.md §7.6`.

## Content

`AUTOREN-HINWEISE.md` is the author-facing guide for the Astro side; `docs/` still follows MkDocs conventions.

- Astro pages take their H1 from frontmatter `title` and must not have a `#` H1 in the body; `scripts/validate-urls.ts` errors on both violations.
- Frontmatter `program:` uses legacy CamelCase ids (`FIBUNext`, `HONNext`, `LENext`, `PDFManager`, `LOHN`, `KIS`) but lowercase for `setup`, `rzladmin`, `technik` — it is derived from the source directory name by `scripts/lib/paths.ts`.
- The program-filter dropdown id for a whole section comes from that section's **first** page, so a wrong `program:` in a top-level `index.md` breaks search filtering for every page beneath it.
- `src/content/docs/.pages` is an explicit allowlist with no `...`, so a new top-level directory is invisible in both sidebar and search filter until added there.
- Sidebar group labels come from the directory `index.md`'s `title`, so renaming a page title can rename a nav group.
- A directory without a `.pages` file behaves as `nav: ['...']`; the nav generator throws on broken references, duplicates and empty groups, which surfaces as a build failure.
- Images live in `img/` beside the Markdown by design, because duplicate basenames make a central folder impossible — see `migration-decisions.md`.
- Astro filenames are kebab-case ASCII with German transliteration (`ä→ae`, `ß→ss`) via `slugifySegment` in `scripts/lib/paths.ts`; `docs/` keeps its original Title Case names.
- `hideFooter` and `{data-clipboard-text="…"}` are parsed but nothing consumes them — both are inert today despite appearing in content.

## Search — `src/components/ProgramSearch.astro`, `src/components/search/`

- The filter chain is frontmatter `program:` → `MarkdownContent.astro` emits a `data-pagefind-filter` span inside `data-pagefind-body` → Pagefind facet → `programFilter.ts` mirrors the dropdown onto Pagefind's own (CSS-hidden) checkboxes.
- Filtering must stay native; hiding rendered result nodes was tried and broke counts, "load more", and matches past the first five.
- Highlighting rewrites result hrefs with `?highlight=` params rather than using Pagefind's `highlightParam` — the long comment in `searchResultLinks.ts` explains why the config route is unreachable.
- The whole feature rides on undocumented Starlight/Pagefind internals (`#starlight__search`, `.pagefind-ui__*`, `body[data-search-modal-open]`), so any upgrade can break it with zero build errors.
- `src/content/i18n/de.json` overrides the Pagefind UI strings because Pagefind's own language auto-detection is dead code in its bundled build — see the comment in `src/content.config.ts`.
- The legacy equivalents are `overrides/partials/search.html` and `plugins/program_filter.py`; keep them in sync while both stacks are live.

## Markdown plugin — `src/plugins/remark-mkdocs-attributes.ts`

- Starlight's `remark-directive` tokenises `{:width="…"}` into three sibling nodes, so every attribute handler must cope with both the split and the plain single-text shape — tests only cover the plain one, so a refactor can pass tests and break in production.
- `#only-light`/`#only-dark` image suffixes are stripped here and hidden by `.img-light`/`.img-dark` rules in `src/styles/rzl.css`; remove either half and both variants render stacked.
- Tests live in `scripts/plugins/remark-mkdocs-attributes.test.ts`, away from the source, so `pnpm test`'s glob finds them.

## Redirects

- Only ~139 of 1970 legacy 301s fit Azure's 20 KB `staticwebapp.config.json` limit; the rest are served by a client-side script inlined in `src/content/docs/404.md`'s `head:` frontmatter that fetches `/legacy-redirects.json`.
- Deleting that 404 script silently kills most legacy URLs.

## Styling

- `src/styles/rzl.css` is the only `customCss` entry; `src/styles/search-filter.css` is kept separate purely to reduce merge conflicts.
- Brand tokens are `--rzl-green`, `--rzl-red`, `--rzl-yellow`; accent is RZL red, and `caution`/`note` asides are retinted to brand colours.

## CI

- `.github/workflows/build-docs.yml` runs only `pnpm check` and `pnpm build`; `pnpm test` and `pnpm validate:urls` are manual.
- Its `paths:` filter does not include `staticwebapp.config.json` or `migration-report.json`, so a change touching only those never deploys.

## Commits & PRs

- Use Karma-style commit messages: `type(scope): imperative, lowercase summary`, e.g. `feat(search): highlight the matching text on the page a result opens`. Common types: `feat`, `fix`, `docs`, `chore`. Add a body paragraph when the reasoning isn't obvious from the diff; keep unrelated doc updates in separate commits.

## Maintaining this file

Update AGENTS.md in the same change set whenever a change invalidates a line here or teaches a costly lesson. Prefer deleting over adding, and pointers over prose. One sentence per bullet, current state only, no history. Anything discoverable by reading a file this document already points at does not belong here.
