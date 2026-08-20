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
| Package manager | **pnpm only** (no npm/yarn lockfiles in repo) |
| Framework | Astro (current stable at implementation time) |
| Docs theme | `@astrojs/starlight` |
| Language | **TypeScript** for all project code (config, integrations, scripts, components, client islands) |
| Validation | **`astro check`** (+ `tsc` as pulled in by Astro); CI must fail on check errors |
| Lint/format (recommended) | ESLint flat config + Prettier; optional `pnpm lint` in CI |
| Markdown | Starlight content collection; prefer `.md` for authors; `.mdx` only where components are required |
| Search | Starlight default (Pagefind) + **custom TypeScript** program facet |
| Deploy | Static output to Azure Static Web Apps (same secret/flow as today) |

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
- Prefer **kebab-case or existing folder names** for stability; do **not** mass-rename program folders in v1 if that breaks URLs—prefer URL mapping layer
- Images stay next to content or under `public/` per Starlight/Astro asset rules decided in Phase 1 spike (document the chosen rule and stick to it)

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

1. **Preserve bookmarks and external links** where possible.
2. Where Astro/Starlight slug rules differ, emit **301 redirects** in `staticwebapp.config.json` (and/or `_redirects` if ever needed).
3. Trailing-slash policy: pick **one** (recommend: always trailing slash, matching current MkDocs + `redirect.js` behavior) and enforce in Astro config + SWA.

### 4.2 Work items

1. Crawl current production or committed `dist/` → list of all HTML paths.
2. Generate expected Starlight slugs from migrated file tree.
3. Diff → `redirects` entries for every mismatch.
4. Encode spaces as `%20` consistently; test Azure SWA behavior.
5. Root legal pages: `/impressum/`, `/datenschutz/` parity.
6. Custom 404 page (Starlight/Astro) wired via `staticwebapp.config.json` `responseOverrides` (keep pattern).

### 4.3 Open decision (must confirm before bulk migrate)

- **Slug style:** keep filesystem names (including spaces) vs normalize to kebab-case + redirects.  
  - *Recommendation:* normalize **new** paths to URL-safe slugs; ship comprehensive redirects from old MkDocs URLs for one major release cycle.

---

## 5. Navigation migration

### 5.1 Source of truth today

- `docs/.pages` — top-level program order and labels (e.g. `FIBU Next: FIBUNext`)
- Nested `docs/**/.pages` — section order, `index.md`, `...` globs

### 5.2 Target

Starlight `sidebar` in `astro.config.ts` (or generated module `src/nav/sidebar.ts` imported by config).

**Do not** hand-maintain 102 files forever without a generator.

### 5.3 Approach

1. **Parser** (`scripts/migrate-nav-from-pages.ts`):
   - Read all `.pages` YAML
   - Resolve relative entries, `...`, and directory defaults
   - Emit `StarlightUserConfig['sidebar']` structure as TypeScript
2. **Labels:** preserve display titles from `.pages` keys
3. **Top-level programs:** map to Starlight sidebar groups; optional custom header tabs later if product requires Material-like tabs
4. **Authoring after cutover (choose one and document in readme):**
   - **A (recommended v1):** generated sidebar committed; re-run `pnpm migrate:nav` when structure changes
   - **B:** replace `.pages` with Starlight-native sidebar fragments per section
   - **C:** folder-order only (loses explicit ordering—only if product accepts)

### 5.4 Validation

- Every content file appears exactly once in nav (or intentionally hidden via frontmatter)
- No empty groups
- Order matches production for top-level programs and spot-checked deep trees (LOHN, KIS)

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

Rules:

1. If body starts with a single H1, lift to `title` (Starlight convention) **or** keep H1 and set `title` identically—pick one rule site-wide (recommend: frontmatter `title` + no duplicate H1, or keep H1 if authors rely on it—Starlight docs prefer `title` in frontmatter).
2. Optional `program` frontmatter: set from first path segment for search faceting (override allowed).
3. Drop unknown MkDocs-only keys after mapping.

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
| `warning` | `caution` (or `danger` if severity requires) |
| `info` / `Info` | `note` or `tip` (pick one; document) |
| `note` | `note` |
| `question` | `note` or `tip` |
| `node` | treat as typo/variant of `note` unless content shows otherwise |

Collapsed `???` admonitions → Starlight UI equivalent or HTML `<details>` via plugin.

**Validation:** count admonitions pre/post; zero unconverted `!!!` left in tree after migrate (CI grep gate).

### 6.5 Images and light/dark

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

| Feature | Action |
|---------|--------|
| `admonition` / `details` | §6.4 |
| `superfences` | Starlight/Shiki fences; test nested fences |
| `attr_list` | limited; convert critical cases or remark attributes |
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

`scripts/migrate-nav-from-pages.ts`:

1. Parse `.pages`  
2. Emit `src/nav/sidebar.generated.ts`  
3. Human review diff against production nav screenshots  

### 6.9 Content QA checklist (editorial + eng)

- [ ] Home, impressum, datenschutz  
- [ ] Each top-level program index  
- [ ] One deep LOHN path with spaces  
- [ ] One KIS deep path  
- [ ] Random 20 pages with admonitions  
- [ ] Image-heavy page  
- [ ] Search sample queries (German terms, product names)  
- [ ] Program filter: each program + “Alle”  
- [ ] Mobile nav + search  
- [ ] 404 page German copy  
- [ ] Hainz opens correct URL  
- [ ] Print/PDF CSS: either port `pdf.css` essentials or drop with product sign-off  

---

## 7. Feature reimplementation

### 7.1 Search + program filter

**Today:** Lunr via Material + `program_filter.py` enriches `search_index.json` + `search-filter.js` UI.

**Target:**

1. Enable Starlight/Pagefind search  
2. At build time, ensure each page has stable `program` id (path segment or frontmatter)  
3. **TypeScript** client module filters Pagefind (or DOM results) by program—port logic from `search-filter.js`, improve types, keep `localStorage` key behavior or migrate key once  
4. Override Starlight Search UI component to add `<select>` (“Alle Programme” + labels from top-level nav)  
5. German strings for search UI  

**Acceptance:** filtering narrows results; “Alle” shows full set; preference persists; no console errors.

### 7.2 Hainz header

- Starlight component override for `SiteTitle` / `Header` / social slot (evaluate current Starlight override API at implement time)
- Port from `overrides/main.html`: link `https://hainz.rzlsoftware.at`, icon asset
- Type-checkable `.astro` component

### 7.3 Branding CSS

- Port RZL CSS variables from `extra.css` away from `--md-*` toward Starlight CSS variables / custom properties
- Light + dark palettes
- Warning/info admonition colors aligned with RZL yellow/red/green
- Footer copyright + impressum/datenschutz links (today in `mkdocs.yml` `copyright`)

### 7.4 404

- German 404 (“404 - Ups :D” or updated copy—product decision)
- SWA rewrite unchanged in spirit

### 7.5 Trailing slash helper

- Prefer config over client redirect; drop `redirect.js` if platform handles it
- If still needed: small TypeScript module, not loose JS

### 7.6 PDF styles

- Confirm whether print stylesheet is required; if yes, port minimal rules; if no, document removal

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

- Base: Node LTS image (or keep Python image only if still needed—prefer Node)
- `postCreateCommand`: enable corepack, `pnpm install`
- VS Code launch: `pnpm dev` instead of `mkdocs serve`
- Extensions: Astro + ESLint optional

### 9.3 Dependabot

- Switch to `npm` ecosystem entries for pnpm (Dependabot supports pnpm lockfiles) or keep updated manually—align `.github/dependabot.yml`

---

## 10. Phased execution plan

### Phase 0 — Foundations (0.5–1 day)

- [ ] Create branch `chore/astro-starlight-migration`
- [ ] Scaffold Astro Starlight with **pnpm**
- [ ] Enable strict TypeScript + `astro check` in CI skeleton
- [ ] Document Node version in `readme` / `.nvmrc` / DevContainer
- [ ] Decision log: slug policy, content path, image strategy (§4.3, §6)

**Exit:** empty Starlight site builds and checks clean.

### Phase 1 — Spike on real slice (2–4 days)

- [ ] Import home + one program (Board) + legal pages through migration scripts (even if partial)
- [ ] Prove admonitions, images, sidebar generation, search filter MVP
- [ ] Measure build time and output size
- [ ] Validate Azure SWA deploy from spike artifact (preview env)

**Exit:** written spike notes; go/no-go on remaining assumptions; adjust plan if blocked.

### Phase 2 — Tooling complete (3–5 days)

- [ ] Finish `migrate-content.ts`, `migrate-nav-from-pages.ts`, `build-redirect-map.ts`, `validate-urls.ts`
- [ ] Remark/rehype plugins stable
- [ ] Migration report + CI grep gates (`!!!` free, etc.)
- [ ] Component overrides: Header/Hainz, Search+filter, 404, Footer

**Exit:** scripts run clean on full `docs/` copy in branch.

### Phase 3 — Full content migration (3–6 days)

- [ ] Run full migrate into `src/content/docs`
- [ ] Generate sidebar
- [ ] Generate redirect map from old `dist/` or production crawl
- [ ] Fix link/check failures iteratively
- [ ] Port CSS branding
- [ ] Full `pnpm check && pnpm build`

**Exit:** zero check errors; build green; known defect list only minor.

### Phase 4 — QA and editorial UAT (3–5 days)

- [ ] Checklist §6.9
- [ ] Stakeholder click-through per program
- [ ] Accessibility smoke (keyboard search filter, contrast)
- [ ] Performance smoke (LCP on home, search open)

**Exit:** sign-off checklist completed.

### Phase 5 — Cutover (1–2 days)

- [ ] Merge to `main` during agreed window
- [ ] Deploy production SWA
- [ ] Monitor 404s; hot-fix redirects
- [ ] Keep MkDocs tag/commit as rollback reference
- [ ] Remove MkDocs-only paths from active docs after stability period (or sooner if clean break)

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
| Author confusion (new paths/tooling) | Slow adoption | Update readme; short internal note; DevContainer |
| Starlight breaking changes | Maintenance | Pin versions; `pnpm check` on upgrades |
| Scope creep (redesign) | Delay | Content-faithful port first |

---

## 13. Explicit non-goals (v1)

- Pixel-perfect Material clone
- Full MDX conversion of all pages
- Multilingual site (DE only)
- Versioned docs (mike-style)
- CMS integration
- Replacing Hainz or changing product IA

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

## 19. Open points to refine

Confirm or correct before Phase 1 locks decisions:

1. **Slug policy:** normalize to kebab-case + redirects vs keep legacy path shapes?  
2. **H1 vs `title` frontmatter:** which authoring convention?  
3. **Nav authoring after cutover:** generated sidebar (A) vs new manual format (B)?  
4. **Print/PDF CSS:** still required?  
5. **404 copy:** keep playful text or formalize?  
6. **Program filter labels:** always from current top-level `.pages` titles?  
7. **Minimum Node version** and whether Corepack-enforced pnpm version should be pinned in `package.json#packageManager`?  
8. **Preview hosting:** Azure SWA PR previews only, or additional channel?  
9. **Content freeze:** short freeze during PR4/PR5, or dual-write process?  
10. **Ownership:** who signs off UAT per product area (LOHN, KIS, …)?

---

## 20. References

- Starlight: https://starlight.astro.build/  
- Astro check: https://docs.astro.build/en/reference/cli-reference/#astro-check  
- Azure Static Web Apps config: existing `staticwebapp.config.json`  
- Current site config: legacy `mkdocs.yml`, `plugins/program_filter.py`, `overrides/*`  
- Prior platform analysis: MkDocs 2 unsuitable; MkDocs 1 not long-term; Astro/Starlight chosen for this plan
