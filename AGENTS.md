# Repository Guidelines

This repo houses the RZL Online Hilfe built with MkDocs Material. Follow these notes to keep docs consistent, easy to preview, and ready for deployment.

## Project Structure & Module Organization
- `docs/` contains all content, grouped by product areas such as `KIS/`, `LENext/`, `LOHN/`, `Board/`, and `Belegverarbeitung/`. Each area keeps its own `index.md` and subpages.
- `.pages` files (e.g., `docs/KIS/.pages`) define navigation order for the `awesome-pages` plugin; update them whenever you add, rename, or move pages.
- Shared assets live in `docs/img/`; custom styling in `docs/stylesheets/extra.css` and `docs/stylesheets/pdf.css`; custom behavior in `docs/scripts/redirect.js`.
- Theme tweaks sit in `overrides/`; global configuration (palette, plugins, extra assets) is in `mkdocs.yml`. HTTP response overrides are defined in `staticwebapp.config.json`.

## Build, Test, and Development Commands
```sh
mkdocs serve           # live preview with reload (F5 in the DevContainer starts this)
mkdocs build --strict  # production build; fails on warnings and missing links
mkdocs build --clean -d site  # optional: emit static output used by hosting pipelines
```
Run commands from the repo root. Use the DevContainer/Codespaces setup so MkDocs and its plugins are preinstalled.

## Coding Style & Naming Conventions
- Write Markdown in German; start each page with an H1 that matches the navigation label.
- File and directory names use Title Case with spaces or hyphens where already used (e.g., `FinanzOnline Databox Zuweisungen.md`); avoid abbreviations that are not in the UI.
- Keep links and assets relative to `docs/`; prefer reusing images from `docs/img/` before adding new ones.
- Use MkDocs Material extensions already enabled (`admonition`, `details`, `superfences`) instead of custom HTML where possible.

## Testing Guidelines
- Always run `mkdocs build --strict` before pushing; fix any warnings, 404s, or missing assets it reports.
- When adjusting navigation, confirm the ordering in `.pages` and verify it in `mkdocs serve`.
- For new media, check that image paths resolve and that PDFs or downloads are committed to version control.

## Commit & Pull Request Guidelines
- Follow the existing commit style: concise summary plus issue/PR number in parentheses, e.g., `Add LENext import guide (#127)`.
- Keep changes focused; split unrelated doc updates into separate commits.
- PRs should include a short description of what changed, the area affected (section/path), and a linked issue or ticket. Add screenshots or local preview notes when layout or navigation shifts.
