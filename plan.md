# Migration Plan: MkDocs Material → Astro Starlight

## 1. Purpose and outcome

Migrate **RZL Online Hilfe** from MkDocs Material (MkDocs 1.x) to **Astro + Starlight** as the long-term documentation platform.

**Out of scope for this migration**

- MkDocs 2.0
- Zensical (evaluated separately; not the chosen target)
- Content rewrites beyond mechanical conversion required for Starlight
- Changing Azure Static Web Apps as the host (keep static deploy)

**Success criteria**

- Full site builds with `pnpm build` and validates with `pnpm check` (`astro check` + TypeScript)
- All migrated Markdown pages render; admonitions, images, and internal links work
- Navigation covers all programs (equivalent of current `.pages` trees)
- German UI where Starlight exposes strings; content remains German
- Site search works in German; **program filter** parity with today’s search UX
- Public URLs preserved or permanently redirected (no silent 404s for known production paths)
- Branding: RZL colors, logos, light/dark where applicable, Hainz header entry point
- CI builds and deploys `dist/` (or Astro `outDir`) to Azure Static Web Apps
- Authors edit Markdown; engineers own theme, tooling, and build
- DevContainer: `pnpm install` + `pnpm dev` (F5 / launch config updated)

---

## 1.1 Locked decisions (refined)

| Topic | Decision |
|-------|----------|
| Public URLs | **Normalize** to URL-safe slugs (kebab-case, no spaces); ship a **full 301 redirect map** from old MkDocs/`dist` URLs for a transition period |
| Page titles | **Frontmatter `title` only**; migration strips the duplicate body H1 |
| Navigation authoring | Authors keep editing **`.pages` next to content** as the source of truth; build/dev **generates** the Starlight sidebar from those files (see §5) |
| Print / `pdf.css` | **Drop** — screen-only Hilfe; do not port `pdf.css` |
| 404 copy | **Formal German** (neutral; home + search hints) |
| Cutover content workflow | **Feature-branch only** — no freeze on `main` MkDocs; migration branch rebases/replays content until swap |
| Program filter labels | **Top-level nav titles** (e.g. “FIBU Next”, not `FIBUNext`) |
| Toolchain pins | **`package.json#packageManager`** (pnpm) **+ `.nvmrc`** (Node LTS) + matching DevContainer/CI |
| UAT sign-off | **Per-program contacts** (named list maintained during Phase 4) |
| v1 extras | **None** — no analytics, offline/PWA, or scope beyond existing non-goals |

---

## 1.2 Known issues to fix (found during review)

These were found during manual review of the built Starlight site. **All four fixed** (`7dcf982`, `e0aeb0b`, `9bea5b5`, `03e5aa5`); cross-referenced from their relevant sections below.

- [x] **Light/dark image variants both render.** Fixed (`7dcf982`): added CSS rules (`[data-theme='light'] .img-dark { display: none }` and the inverse) to `src/styles/rzl.css`. The remark plugin already tagged images correctly (§6.5); only the hiding CSS was missing.
- [x] **`{:width="..."}` attribute lists are not converted.** Fixed (`e0aeb0b`), root cause was two-fold: (1) `remark-smartypants` ran before our custom remark plugin and converted straight quotes to curly quotes, breaking the regex match — disabled smartypants site-wide in `astro.config.ts` (also more correct for German content); (2) Starlight's `remark-directive` (used for `:::note`/`:::caution` asides) is a syntax extension that intercepts `{:name=...}` during parsing and splits the sibling text node into `Text("{") + textDirective(name) + Text(rest)` — `src/plugins/remark-mkdocs-attributes.ts` now reconstructs the value across both the split and plain shapes, covered by a new regression test. Also fixed two pre-existing content typos this surfaced (stray colon instead of semicolon; a missing closing quote) in two Reporting pages.
- [x] **Search program filter has no effect.** Fixed (`9bea5b5`): root cause was CSS specificity/cascade, not JS logic — Pagefind's bundled `ui.css` sets `display: flex` on `.pagefind-ui__result` as an author-origin rule, which always overrides the User-Agent default `[hidden] { display: none }` regardless of specificity. `programFilter.ts` now sets `item.style.display` directly (inline styles reliably win over external stylesheets).
- [x] **Sidebar navigation is expanded by default.** Fixed (`03e5aa5`): `scripts/migrate-nav-from-pages.ts` now emits `collapsed: true` on every generated sidebar group; Starlight's `SidebarSublist.astro` already auto-opens whichever group contains the active page regardless of `collapsed`, so no extra expand-logic was needed.

---

## 2. Current state (inventory)

| Item | Value |
|------|--------|
| Stack today | MkDocs + Material, `awesome-pages`, custom hook `plugins/program_filter.py` |
| Content | ~732 Markdown files under `docs/` |
| Nav | ~102 `docs/**/.pages` files |
| Media | ~3500+ images under `docs/**/img/` (~171 MB `docs/`) |
| Programs (top-level) | Board, FIBUNext, Belegverarbeitung, LOHN, KIS, Klientenportal, HONNext, LENext, PDFManager, Reporting, setup, rzladmin, technik (+ root legal pages) |
| Markdown dialect | Python-Markdown + pymdownx: `admonition`, `details`, `superfences`, `attr_list`, `md_in_html`, `toc` |
| Admonitions | ~1062 lines; mostly `warning`, `info`, some `question` / `note` / `node` |
| Light/dark images | ~51 uses of `#only-light` / `#only-dark` |
| Paths with spaces | ~216 Markdown paths (URL encoding critical) |
| Custom theme | `overrides/main.html` (Hainz), `overrides/partials/search.html`, `overrides/404.html` |
| Custom JS | `docs/scripts/search-filter.js`, `docs/scripts/redirect.js` |
| Custom CSS | `docs/stylesheets/extra.css`, `pdf.css` (Material CSS variables) |
| Config | `mkdocs.yml`, `staticwebapp.config.json` |
| CI | `.github/workflows/build-docs.yml` → `pip install` → `mkdocs build -d dist` → Azure SWA |
| Dev | DevContainer Python + `mkdocs serve` via F5 |

**Features that must be reimplemented (not automatic)**

1. awesome-pages / `.pages` → Starlight sidebar (and optional top-level program tabs)
2. Program-tagged search index + UI filter
3. Material admonitions (`!!! warning`) → Starlight asides / MDX or remark pipeline
4. `#only-light` / `#only-dark` image switching
5. Hainz header control
6. Trailing-slash / redirect behavior (today partly client-side)
7. Material-specific frontmatter (`hide: [footer]`)

---

## 3. Target architecture

### 3.1 Stack (mandatory conventions)

| Concern | Choice |
|---------|--------|
| Package manager | **pnpm only** (no npm/yarn lockfiles in repo); pin via `packageManager` field |
| Node | **LTS** pinned in `.nvmrc` + DevContainer + CI (same version) |
| Framework | Astro (current stable at implementation time) |
| Docs theme | `@astrojs/starlight` |
| Language | **TypeScript** for all project code (config, integrations, scripts, components, client islands) |
| Validation | **`astro check`** (+ `tsc` as pulled in by Astro); CI must fail on check errors |
| Lint/format (recommended) | ESLint flat config + Prettier; optional `pnpm lint` in CI |
| Markdown | Starlight content collection; prefer `.md` for authors; `.mdx` only where components are required |
| Search | Starlight default (Pagefind) + **custom TypeScript** program facet; labels from top-level nav titles |
| Deploy | Static output to Azure Static Web Apps (same secret/flow as today) |
| Print CSS | **Not required** — do not ship `pdf.css` |

### 3.2 Proposed repository layout (after migration)

```text
/
├── astro.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── public/                      # static assets copied as-is (favicon, some global img)
│   └── ...
├── src/
│   ├── content/
│   │   ├── docs/                # migrated Markdown (from docs/)
│   │   │   ├── index.md
│   │   │   ├── impressum.md
│   │   │   ├── datenschutz.md
│   │   │   ├── board/...
│   │   │   └── ...
│   │   └── config.ts            # content collection config (Starlight)
│   ├── components/              # .astro + .ts islands only as needed
│   │   ├── HainzLink.astro
│   │   └── search/
│   │       └── ProgramFilter.ts
│   ├── styles/
│   │   └── rzl.css              # ported branding (no Material vars long-term)
│   ├── plugins/                 # remark/rehype TypeScript plugins
│   │   ├── remark-mkdocs-admonitions.ts
│   │   └── remark-only-dark-light.ts
│   └── env.d.ts
├── scripts/                     # one-off + maintainable migration tooling (TypeScript)
│   ├── migrate-content.ts
│   ├── migrate-nav-from-pages.ts
│   ├── build-redirect-map.ts
│   └── validate-urls.ts
├── staticwebapp.config.json     # 404 + redirects
├── .github/workflows/build-docs.yml
├── .devcontainer/
└── AGENTS.md / readme.md        # updated authoring docs
```

**Content path policy**

- Canonical authoring root: `src/content/docs/`
- **Normalize** file/folder segments used in URLs to **kebab-case** (no spaces); keep a machine-generated **old → new** redirect map from production/`dist` inventory
- Program **ids** for search faceting remain stable directory keys where useful (e.g. `FIBUNext`); display labels stay human titles from `.pages`
- Colocate `.pages` with content under `src/content/docs/**` (authors continue to edit them)
- Images stay next to content or under `public/` per Phase 1 spike (document the chosen rule and stick to it)

### 3.3 Tooling scripts (package.json)

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "migrate:content": "tsx scripts/migrate-content.ts",
    "migrate:nav": "tsx scripts/migrate-nav-from-pages.ts",
    "migrate:redirects": "tsx scripts/build-redirect-map.ts",
    "validate:urls": "tsx scripts/validate-urls.ts"
  }
}
```

- Runtime for scripts: `tsx` (TypeScript execute) or compiled `tsc` + `node`—pick one in Phase 0 and keep it.
- **CI gate:** `pnpm check && pnpm build` (and `pnpm validate:urls` once redirect map exists).

---

## 4. URL and routing strategy

Production today: `https://hilfe.rzlsoftware.at/` with directory URLs (MkDocs `index.html` in folders), paths often containing spaces and German characters.

### 4.1 Goals

1. **New canonical URLs** are normalized (kebab-case, no spaces, predictable encoding).
2. **Preserve bookmarks and external links** via **301 redirects** from every known old MkDocs/`dist` path.
3. Trailing-slash policy: **always trailing slash** (match current MkDocs + `redirect.js`); enforce in Astro config + SWA.
4. Formal German **404** when no redirect matches.

### 4.2 Work items

1. Crawl current production or committed `dist/` → list of all HTML paths.
2. Generate normalized Starlight slugs from the migrated file tree.
3. Diff old vs new → `redirects` entries for every mismatch (including `%20` space variants).
4. Test Azure SWA redirect + encoding behavior on a preview environment.
5. Root legal pages: `/impressum/`, `/datenschutz/` parity (normalized if needed + redirects).
6. Custom 404 page (formal German) wired via `staticwebapp.config.json` `responseOverrides`.

### 4.3 Locked slug policy

- **Normalize** path segments for the new site (kebab-case; strip/replace spaces and awkward characters).
- **Do not** rely on serving paths with raw spaces long-term.
- Ship and maintain a generated redirect map for at least one major release cycle after cutover; prune only after 404 metrics are acceptable.
- Migration scripts must record `legacyPath → newPath` in `migration-report.json` / redirect artifacts for audit.

---

## 5. Navigation migration

### 5.1 Source of truth today

- `docs/.pages` — top-level program order and labels (e.g. `FIBU Next: FIBUNext`)
- Nested `docs/**/.pages` — section order, `index.md`, `...` globs
- **Authors already maintain these files** and will continue to define sidebar structure after cutover

### 5.2 Chosen approach: keep `.pages` for authors, generate Starlight sidebar

**Why this is better for RZL than hand-edited Starlight sidebar config**

| Approach | Pros | Cons |
|----------|------|------|
| **A. Authors keep `.pages`; tooling generates sidebar (chosen)** | Zero IA workflow change; works with 102 nested files; matches awesome-pages mental model; same files drive program-filter labels | Need a maintained parser; authors must run dev/build (or CI) to see nav; generator bugs affect nav |
| B. Starlight-native sidebar only | One official format | Authors must learn new config; huge central file or many fragments; painful for deep LOHN/KIS trees |
| C. Folder order only | Simple | **Loses** explicit ordering authors rely on today — reject |

**Decision:** **A** — `.pages` remain the **author-facing source of truth** colocated with content. Engineers own a TypeScript generator that turns the tree into Starlight `sidebar` data. Authors do **not** edit `astro.config.ts` or generated TS for routine nav changes.

### 5.3 Target mechanics

1. **Authoring:** edit `src/content/docs/**/.pages` (same YAML shape as today, documented in readme/AGENTS).
2. **Generator** (`scripts/migrate-nav-from-pages.ts` and/or build-time module):
   - Read all `.pages` YAML
   - Resolve relative entries, `...`, and directory defaults
   - Map entries to **normalized content slugs**
   - Emit sidebar structure consumed by Starlight (`src/nav/sidebar.generated.ts` **or** virtual module loaded in `astro.config.ts`)
3. **When generation runs:**
   - **dev/build:** prefer generate-on-the-fly or a thin prebuild step so authors only use `pnpm dev` / `pnpm build`
   - Optional committed `sidebar.generated.ts` only if it helps review—must not become a second manual source of truth
4. **Labels:** display titles from `.pages` keys (e.g. `FIBU Next`)
5. **Program filter:** options = top-level `.pages` titles + directory ids
6. **Top-level programs:** Starlight sidebar groups; Material-like tabs optional later (not v1 required)

### 5.4 Validation

**Status:** ✅ Fixed (`03e5aa5`) — generated groups now set `collapsed: true`; Starlight auto-expands the active page's ancestor path natively.

- Every content file appears exactly once in nav (or intentionally hidden via frontmatter)
- No empty groups
- Order matches production for top-level programs and spot-checked deep trees (LOHN, KIS)
- Changing a `.pages` entry changes sidebar after refresh/`pnpm dev` without hand-editing TS config
- Sidebar groups collapsed by default; active page's path auto-expanded

---

## 6. Content migration

### 6.1 Principles

- Mechanical conversion first; no drive-by wording edits
- Idempotent scripts where possible (`pnpm migrate:content` safe to re-run on a branch)
- Keep German H1 titles aligned with nav labels
- Frontmatter: Starlight schema (`title`, `description`, optional `sidebar`, `tableOfContents`, etc.)
- Map MkDocs `hide: [footer]` → Starlight page frame options / custom layout flag

### 6.2 File move map

| From | To |
|------|-----|
| `docs/**/*.md` | `src/content/docs/**/*.md` (or `.mdx` if required) |
| `docs/**/img/**` | colocated `src/content/docs/**/img/**` and/or `public/...` per Phase 1 decision |
| `docs/stylesheets/*` | port selectively → `src/styles/rzl.css` (do not copy Material internals blindly) |
| `docs/scripts/*` | rewrite in TypeScript under `src/` (see §7) |
| `docs/.pages` | input only to nav generator; not shipped as content |
| `overrides/*` | replaced by Starlight component overrides |
| `plugins/program_filter.py` | replaced by build-time + client TypeScript |
| `mkdocs.yml` | removed after cutover (keep in git history) |

### 6.3 Frontmatter transformation

**MkDocs example**

```yaml
---
hide:
  - footer
---
# Title in body
```

**Starlight target**

```yaml
---
title: Title
# optional:
# template: splash  # only if needed
# props / custom flag for footer hide via component override
---
```

Rules (locked):

1. **Frontmatter `title` only:** if the body starts with a single H1, lift its text into `title` and **remove** that H1 from the body (no duplicate title heading).
2. Authors set/change titles via frontmatter after cutover (document in readme).
3. `program` frontmatter: set from first path segment / program id for search faceting (manual override allowed).
4. Drop unknown MkDocs-only keys after mapping (`hide: [footer]` → Starlight/custom flag, not left as-is).

### 6.4 Admonitions

**Source (Material):**

```markdown
!!! warning
    Text...

!!! info "Titel"
    Text...
```

**Target options (implement in this order of preference)**

1. **remark plugin** (`remark-mkdocs-admonitions.ts`) converting to Starlight aside syntax or MDX `<Aside>` during migrate **or** at build time  
2. One-time codemod writing Starlight asides into files:

```markdown
:::caution
Text...
:::
```

Type mapping (initial):

| MkDocs | Starlight |
|--------|-----------|
| `warning` | `caution` |
| `info` / `Info` | `note` |
| `note` | `note` |
| `question` | `tip` |
| `node` | `note` (treat as variant/typo unless content audit says otherwise) |

Collapsed `???` admonitions → Starlight UI equivalent or HTML `<details>` via plugin.

**Validation:** count admonitions pre/post; zero unconverted `!!!` left in tree after migrate (CI grep gate).

### 6.5 Images and light/dark

**Status:** ✅ Fixed (`7dcf982`) — added `[data-theme='light'] .img-dark { display: none }` (and inverse) to `src/styles/rzl.css`.

- Rewrite `#only-light` / `#only-dark` to a supported pattern:
  - **Preferred:** custom remark → wrap in `<div class="img-light">` / `img-dark` + CSS in `rzl.css`, or Starlight-compatible picture switching
- Ensure relative image paths resolve after move
- SVG logos on home and program indexes must work in both themes
- Large binary tree: do not recompress unless necessary; watch Git LFS (none today—keep simple)

### 6.6 Links

- Internal links: `.md` paths, relative links, possible absolute `/...` paths
- Codemod + `pnpm build` strict link check (Starlight/Astro link checking or `validate:urls`)
- External links unchanged
- Anchor links: verify heading slug algorithm differences (GitHub-ish vs Python-Markdown slugify)—add redirect or slug config if anchors break critically

### 6.7 Markdown extensions parity

**Status:** ✅ Fixed (`e0aeb0b`) — root cause was `remark-smartypants` breaking quote matching (now disabled) plus Starlight's `remark-directive` splitting `{:name=...}` into a `textDirective` node; `remark-mkdocs-attributes.ts` now reconstructs both shapes.

| Feature | Action |
|---------|--------|
| `admonition` / `details` | §6.4 |
| `superfences` | Starlight/Shiki fences; test nested fences |
| `attr_list` | limited; convert critical cases or remark attributes — **image `{:width=...}` currently unhandled, renders as literal text (§1.2)** |
| `md_in_html` | audit raw HTML; keep if Astro allows |
| `toc` | Starlight right-rail TOC |
| Tables, lists, bold | standard CommonMark/GFM |

### 6.8 Migration script pipeline

`scripts/migrate-content.ts` (TypeScript) stages:

1. Copy/move tree with path rules  
2. Transform frontmatter  
3. Transform admonitions  
4. Transform only-light/dark  
5. Normalize links  
6. Inject `program` metadata  
7. Write report: `migration-report.json` (files touched, warnings, skipped)

`scripts/migrate-nav-from-pages.ts` (and/or build-time equivalent):

1. Parse `.pages` under content root  
2. Emit or serve Starlight sidebar data (generated; not hand-edited by authors)  
3. Human review diff against production nav screenshots  
4. Export top-level program id → label map for the search filter  

### 6.9 Content QA checklist (editorial + eng)

- [ ] Home, impressum, datenschutz  
- [ ] Each top-level program index  
- [ ] One deep LOHN path that **had** spaces (old URL redirects + new slug works)  
- [ ] One KIS deep path  
- [ ] Random 20 pages with admonitions  
- [ ] Image-heavy page  
- [ ] Search sample queries (German terms, product names)  
- [ ] Program filter: each program + “Alle” (labels = nav titles)  
- [ ] Mobile nav + search  
- [ ] 404 page — formal German  
- [ ] Hainz opens correct URL  
- [ ] Print/PDF: confirm **no** `pdf.css` dependency remains  
- [ ] Per-program UAT contact sign-off recorded

---

## 7. Feature reimplementation

### 7.1 Search + program filter

**Status:** ✅ Fixed (`9bea5b5`) — root cause was CSS cascade, not JS logic: Pagefind's bundled `ui.css` sets `display: flex` on `.pagefind-ui__result` (author-origin), which always beats the UA-default `[hidden]{display:none}` regardless of specificity. `programFilter.ts` now toggles `item.style.display` directly. **Still open (non-blocking):** program id is derived client-side from the URL path segment rather than native Pagefind facets (`data-pagefind-filter` isn't emitted yet); a manual `pnpm preview` click-through is still recommended for final UAT confidence.

**Today:** Lunr via Material + `program_filter.py` enriches `search_index.json` + `search-filter.js` UI.

**Target:**

1. Enable Starlight/Pagefind search  
2. At build time, ensure each page has stable `program` id (path segment or frontmatter)  
3. **TypeScript** client module filters Pagefind (or DOM results) by program—port logic from `search-filter.js`, improve types, keep `localStorage` key behavior or migrate key once  
4. Override Starlight Search UI component to add `<select>` (“Alle Programme” + **labels from top-level `.pages` / nav titles**)  
5. German strings for search UI  

**Acceptance:** filtering narrows results; “Alle” shows full set; labels match sidebar program titles; preference persists; no console errors. — Automated build/check verified; manual UAT click-through still pending (Phase 4).

### 7.2 Hainz header

**Status:** ✅ Implemented (`012036f`) — `src/components/HainzLink.astro`, wired via Starlight's `SocialIcons` component override (no more specific "extra header action" slot exists in Starlight 0.41.7).

- Starlight component override for `SiteTitle` / `Header` / social slot (evaluate current Starlight override API at implement time)
- Port from `overrides/main.html`: link `https://hainz.rzlsoftware.at`, icon asset
- Type-checkable `.astro` component

### 7.3 Branding CSS

**Status:** ✅ Mostly implemented (`012036f`) — `src/styles/rzl.css` ports RZL colors to `--sl-*` variables with light/dark accent overrides and caution/note admonition tinting. **Open:** Footer copyright + impressum/datenschutz link parity not yet ported (Starlight default footer in use).

- Port RZL CSS variables from `extra.css` away from `--md-*` toward Starlight CSS variables / custom properties
- Light + dark palettes
- Warning/info admonition colors aligned with RZL yellow/red/green
- Footer copyright + impressum/datenschutz links (today in `mkdocs.yml` `copyright`)

### 7.4 404

**Status:** ✅ Implemented (`012036f`); redirect coverage gap fixed during Phase 4 QA — `src/content/docs/404.md`, formal German copy, `template: splash`. **Found during Phase 4 QA:** `scripts/build-redirect-map.ts` only inlines the ~139 shortest legacy redirects into `staticwebapp.config.json` (Azure's 20 KB route-config limit); the remaining ~1,831 of 1,970 legacy paths were written to `public/legacy-redirects.json` as a "client fallback map" but nothing actually read that file — those URLs silently 404'd. Fixed by adding an inline `<script>` (frontmatter `head`) to `404.md` that looks up the current path (raw, decoded, and trailing-slash variants) in `/legacy-redirects.json` and does `location.replace()` on a match. Also fixed a pre-existing `scripts/validate-urls.ts` false-positive (404.md isn't in `migration-report.json` and builds to `dist/404.html`, not a directory route) so `pnpm validate:urls` passes cleanly and now genuinely proves all 1,970 redirect rules are reachable, not just the inlined subset.
- **Formal German** copy (e.g. page not found, link home, hint to use search) — not the playful “Ups :D” tone unless brand revisits later
- SWA `responseOverrides` rewrite unchanged in spirit

### 7.5 Trailing slash helper

**Status:** ⏳ Not yet started — `trailingSlash: 'always'` is set in `astro.config.ts`; `docs/scripts/redirect.js` client-side helper has not been evaluated/ported or explicitly dropped yet.

- Prefer config over client redirect; drop `redirect.js` if platform handles it
- If still needed: small TypeScript module, not loose JS

### 7.6 PDF styles

- **Out of scope:** do not port `pdf.css`; remove from config and docs references during MkDocs teardown

---

## 8. Configuration reference (target sketch)

### 8.1 `astro.config.ts` (illustrative)

- `site: 'https://hilfe.rzlsoftware.at'`
- `trailingSlash: 'always'`
- integrations: `starlight({ title, locales/de, sidebar, customCss, components, head })`
- markdown remark plugins as needed
- `vite` only if required

### 8.2 TypeScript

- `"strict": true` in `tsconfig.json`
- `astro/tsconfigs/strict` extends recommended
- No plain `.js` project files

### 8.3 `astro check`

- Local: `pnpm check` before PR
- CI: mandatory; blocks merge/deploy on errors
- Fix all diagnostics—do not ignore broadly

---

## 9. CI / CD and DevContainer

**Status:** ✅ Implemented (`c3d5b0a`) — `.github/workflows/build-docs.yml` now runs Node/pnpm setup + `pnpm check && pnpm build`; `.devcontainer/*` and `.vscode/launch.json` updated to Node/pnpm/`pnpm dev`. §9.3 Dependabot alignment still open (not yet touched).

### 9.1 GitHub Actions

Replace pip/mkdocs steps with:

1. Checkout  
2. Setup pnpm + Node (LTS)  
3. `pnpm install --frozen-lockfile`  
4. `pnpm check`  
5. `pnpm build`  
6. Deploy output dir to Azure SWA (map Astro `dist/` to current `app_location`)  
7. Upload path filters: include `src/**`, `public/**`, `astro.config.ts`, `package.json`, etc.

### 9.2 DevContainer

- Base: Node image matching `.nvmrc` LTS
- `packageManager` field honored (Corepack enable + `pnpm install --frozen-lockfile` when lockfile exists)
- VS Code launch: `pnpm dev` instead of `mkdocs serve`
- Extensions: Astro + ESLint optional

### 9.3 Dependabot

- Switch to `npm` ecosystem entries for pnpm (Dependabot supports pnpm lockfiles) or keep updated manually—align `.github/dependabot.yml`

---

## 10. Phased execution plan

### Phase 0 — Foundations (0.5–1 day)

- [x] Create branch `chore/astro-starlight-migration` (plan committed)
- [x] Scaffold Astro Starlight with **pnpm**
- [x] Enable strict TypeScript + `astro check` in CI skeleton
- [x] Pin toolchain: `packageManager` + `.nvmrc` + DevContainer/CI same Node
- [x] Apply locked decisions (§1.1); only remaining spike choice: image asset layout

**Exit:** empty Starlight site builds and checks clean. ✅ Done (`32551e1`).

### Phase 1 — Spike on real slice (2–4 days)

- [x] Import home + one program (Board) + legal pages through migration scripts (even if partial)
- [x] Prove admonitions, images, sidebar generation, search filter MVP
- [x] Measure build time and output size (full 732-route build ~10-12s, see Phase 3 note)
- [x] Validate Azure SWA deploy from spike artifact (preview env) — confirmed via PR #211, preview build/deploy succeeded (`pnpm check && pnpm build` clean, SWA stage site live)

**Exit:** spike folded directly into full migration (`b635ad6`); no blocking issues found.

### Phase 2 — Tooling complete (3–5 days)

- [x] Finish `migrate-content.ts`, `migrate-nav-from-pages.ts`, `build-redirect-map.ts`, `validate-urls.ts`
- [x] Remark/rehype plugins stable (`remark-mkdocs-attributes.ts`)
- [x] Migration report + CI grep gates (`!!!` free, etc.) — `migration-report.json` written, only minor title-derivation warnings remain
- [x] Component overrides: Header/Hainz (`src/components/HainzLink.astro`), Search+filter (`src/components/ProgramSearch.astro`), 404 (`src/content/docs/404.md`) — Footer not yet customized (using Starlight default; revisit if legal-links/copyright parity needed)

**Exit:** scripts run clean on full `docs/` copy in branch. ✅ Achieved.

### Phase 3 — Full content migration (3–6 days)

- [x] Rebase/replay latest `main` content onto migration branch (feature-branch workflow)
- [x] Run full migrate into `src/content/docs` (normalized slugs + frontmatter titles) — 732 routes migrated
- [x] Ensure `.pages` tree moved/updated with content; sidebar generates cleanly
- [x] Generate redirect map from old `dist/` or production crawl (`redirects.generated.json`, `public/legacy-redirects.json`, inline `staticwebapp.config.json` routes for the top SWA-size-limited subset)
- [x] Fix link/check failures iteratively — `pnpm check` and `pnpm build` both clean (733 pages built)
- [x] Port CSS branding (no `pdf.css`) — `src/styles/rzl.css` ported to Starlight `--sl-*` variables, admonition tinting for caution/note
- [x] Full `pnpm check && pnpm build` — 0 errors/warnings/hints; build completes in ~10-14s

**Exit:** zero check errors; build green; known defect list only minor (title-derivation warnings; Footer override and native Pagefind faceting are follow-ups, see §7.1 notes below).

### Phase 4 — QA and editorial UAT (3–5 days)

- [ ] Checklist §6.9 (engineering smoke pass done, see below; editorial pass still open)
- [ ] **Per-program contacts** click-through and written sign-off — contacts not yet named
- [ ] Accessibility smoke (keyboard search filter, contrast) — search filter uses a native `<select>` with `aria-label`; full manual pass still open
- [ ] Performance smoke (LCP on home, search open)
- [x] Redirect spot-check: old spaced URLs → new slugs — found and fixed a real gap: only ~139/1970 legacy redirects were inlined into `staticwebapp.config.json` (Azure size limit); the rest relied on an unused `public/legacy-redirects.json` fallback map. Added a client-side lookup script to `404.md` (see §7.4) so all 1,970 legacy paths now resolve; `pnpm validate:urls` passes and confirms full coverage.

**Phase 4 engineering smoke pass (this session):** `pnpm check`, `pnpm build` (734 pages), `pnpm test` (12/12), and `pnpm validate:urls` all clean. Spot-checked: home/impressum/datenschutz titles, all 13 top-level program indexes (technik intentionally has no index page, matching legacy `docs/technik/.pages`), admonition conversion counts (284 caution / 204 note / 1 tip asides, zero unconverted `!!!`), `{:width=...}` attr_list rendering (`style="width:1000px;"` confirmed in built HTML), light/dark image CSS rules present, Hainz header link (`https://hainz.rzlsoftware.at`), no `pdf.css` remnants anywhere in source or `dist/`, and the program filter `<select>` (native element, `aria-label="Programm"`, "Alle Programme" default option, all 13 programs, `localStorage` persistence). Still open: named per-program UAT contacts, full manual click-through (search results, mobile nav, keyboard-only pass), and performance/LCP measurement — these need human/editorial involvement rather than being purely engineering-verifiable.

**Exit:** all program contacts signed off (or waivers recorded).

### Phase 5 — Cutover (1–2 days)

- [ ] Final content replay from `main` onto migration branch; rebuild; smoke
- [ ] Merge to `main` during agreed window (MkDocs on `main` remains editable until this merge)
- [ ] Deploy production SWA
- [ ] Monitor 404s; hot-fix redirects
- [ ] Tag `pre-starlight-cutover` on last MkDocs-capable commit for rollback
- [ ] Remove MkDocs-only toolchain after stability period

**Exit:** production on Starlight; rollback plan unused or documented.

### Phase 6 — Hardening (ongoing)

- [ ] Delete obsolete MkDocs config/overrides/plugins when safe
- [ ] Update `AGENTS.md` / `readme.md` for authors (pnpm, paths, nav workflow)
- [ ] Dependabot + version pins
- [ ] Optional: improve search ranking, nav UX, drop remaining redirects over time

---

## 11. Rollback plan

1. **Before cutover:** MkDocs pipeline still builds from last-known-good commit.  
2. **After cutover failure:** revert deploy to previous SWA artifact / previous git SHA that still contains MkDocs build.  
3. Keep one tagged release: `pre-starlight-cutover`.  
4. Do not delete Azure token or old workflow until Phase 6.

---

## 12. Risk register

| Risk | Impact | Mitigation |
|------|--------|------------|
| URL slug mismatch (spaces, encoding) | Broken bookmarks | Crawl + redirect map; automated diff |
| Admonition conversion errors | Broken callouts | Count gates; visual QA sample |
| Pagefind DE quality vs Lunr | Worse search | Tune language; UAT queries list |
| Program filter incomplete API | Missing feature | Early spike; DOM fallback filter |
| Build time / memory on 3.5k images | CI fails | Asset strategy; cache pnpm; SWA size limits |
| Author confusion (new paths/tooling) | Slow adoption | Keep `.pages` workflow; update readme; DevContainer |
| `.pages` generator drift/bugs | Wrong nav order | Fixtures from real trees; CI nav snapshot test |
| Feature-branch content drift | Missing pages at cutover | Documented replay steps; final sync checklist before merge |
| Starlight breaking changes | Maintenance | Pin versions via pnpm; `pnpm check` on upgrades |
| Scope creep (redesign) | Delay | Content-faithful port first; no v1 extras |

---

## 13. Explicit non-goals (v1)

- Pixel-perfect Material clone
- Full MDX conversion of all pages
- Multilingual site (DE only)
- Versioned docs (mike-style)
- CMS integration
- Replacing Hainz or changing product IA
- Print/PDF stylesheet (`pdf.css`)
- Analytics, offline/PWA, auth
- Replacing author `.pages` workflow with hand-maintained Starlight sidebar config

---

## 14. Documentation updates (as part of migration PRs)

| File | Change |
|------|--------|
| `readme.md` | pnpm, DevContainer, `pnpm dev` / `pnpm build` / `pnpm check` |
| `AGENTS.md` | structure under `src/content/docs`, nav generation, no MkDocs |
| `plan.md` | this document; mark phases done via PR notes or checklist commits |
| `.github/workflows/build-docs.yml` | Node/pnpm pipeline |
| `.devcontainer/*` | Node + pnpm |

---

## 15. Effort estimate (indicative)

| Phase | Effort |
|-------|--------|
| 0 Foundations | 0.5–1 d |
| 1 Spike | 2–4 d |
| 2 Tooling + features | 3–5 d |
| 3 Full content | 3–6 d |
| 4 UAT | 3–5 d |
| 5 Cutover | 1–2 d |
| **Total** | **~2.5–5 engineer-weeks** |

Calendar time depends on editorial UAT availability and redirect edge cases.

---

## 16. Definition of done (release)

- [ ] `pnpm check` clean  
- [ ] `pnpm build` clean  
- [ ] CI green on `main`  
- [ ] Production Hilfe on Starlight  
- [ ] Redirects cover inventory of old URLs (measured residual 404 rate acceptable)  
- [ ] Program search filter accepted by stakeholders  
- [ ] Authors can edit Markdown via documented workflow  
- [ ] MkDocs not required for day-to-day work  
- [ ] Rollback tag exists  

---

## 17. Implementation order (PR sequence)

1. **PR1:** Scaffold Astro/Starlight + pnpm + check CI (no content wipe yet; can live in subdir or branch-only)  
2. **PR2:** Migration scripts + remark plugins  
3. **PR3:** Component overrides (theme, Hainz, search filter)  
4. **PR4:** Full content + nav + redirects  
5. **PR5:** Remove MkDocs toolchain; finalize DevContainer/readme/AGENTS  
6. **PR6:** Cutover fixes (hotfixes allowed)

Prefer trunk-in-branch until PR4 is ready; avoid half-migrated `main`.  
**Content workflow:** authors keep shipping on `main` (MkDocs) until cutover; migration branch **rebases/replays** content—no full freeze, no dual-write of two permanent trees.

---

## 18. Commands cheat sheet (target)

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview

pnpm migrate:content
pnpm migrate:nav
pnpm migrate:redirects
pnpm validate:urls
```

---

## 19. Remaining open points (minor)

Most product decisions are locked in §1.1. Still to fill during implementation:

1. **Exact Node LTS version** and **pnpm version** strings (set when scaffolding; encode in `.nvmrc` + `packageManager`).
2. **Image asset layout:** colocated in content collection vs `public/` (Phase 1 spike).
3. **Named per-program UAT contacts** (list in Phase 4; e.g. Board, LOHN, KIS, …).
4. **How long to keep the full redirect map** after cutover (metrics-driven; default ≥ one release cycle).
5. **Preview hosting:** continue Azure SWA PR previews only unless ops requests otherwise.

---

## 20. References

- Starlight: https://starlight.astro.build/  
- Astro check: https://docs.astro.build/en/reference/cli-reference/#astro-check  
- Azure Static Web Apps config: existing `staticwebapp.config.json`  
- Current site config: legacy `mkdocs.yml`, `plugins/program_filter.py`, `overrides/*`  
- Prior platform analysis: MkDocs 2 unsuitable; MkDocs 1 not long-term; Astro/Starlight chosen for this plan
