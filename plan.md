# Search Enhancements Plan

Goal: improve MkDocs Material search for a large documentation set and add an optional filter by program (top-level directory under `docs/`), without degrading existing navigation.

## Approach
- Keep using MkDocs Material’s built-in Lunr search for compatibility; augment it rather than replacing it to avoid theme drift.
- Add lightweight faceting by program using client-side filtering against the search index (filter by URL prefix/metadata).
- Enrich the index for German content and stability (prebuilt index, language-aware stemming) to improve relevance.

## Implementation Steps
1) Inventory current versions and constraints: confirm MkDocs/MkDocs Material version and existing plugin set; check if adding dependencies is allowed in the build environment.
2) Evaluate search options: confirm whether an upgrade to the latest MkDocs Material is acceptable (for improved search UX and performance); if upgrading is blocked, keep current version and implement only additive overrides.
3) Program metadata tagging: implement a small MkDocs plugin (in-repo, e.g., `plugins/program_filter.py`) that derives `program` from the first path segment under `docs/` and injects it into `page.meta` (with manual override support).
4) Index enrichment:
   - Configure the `search` plugin with `prebuild: true` and German language stemming; add `mkdocs-lunr-languages` (approved) if not already present.
   - Optionally boost titles and headings to improve top hits for short queries.
5) Front-end filter UI:
   - Override the search dialog partial in `overrides/partials/search.html` (or add a small block above results) to render a dropdown/checkbox list of programs detected from the index (includes “All” default).
   - Persist the selected program in `localStorage` so frequent users keep their scope between sessions.
   - On mobile, present the filter behind a toggle to save space.
6) Client-side filtering logic:
   - Add a custom script (e.g., `overrides/assets/javascripts/search-filter.js`) that hooks into Material’s search events and filters result entries by program (match `result.location` prefix or `result.meta.program`).
   - Ensure the filter only narrows results and never blocks queries when “All” is selected.
7) QA and verification:
   - `mkdocs serve` for interactive testing; verify filtering works on representative programs and that “All” returns full results.
   - `mkdocs build --strict` to ensure the plugin and overrides do not introduce warnings.
   - Spot-check index size/build time to confirm no significant regressions.

## Confirmed Decisions
- New Python dependency `mkdocs-lunr-languages` is allowed for search language support.
- Mobile search filter should be tucked behind a toggle to preserve space.
