# Migration Decisions and Open Questions

This file records implementation questions that could not be answered during the unattended migration and the approach selected to keep work moving.

## Toolchain versions

**Question:** Which exact Node LTS and pnpm versions should the project pin?

**Selected approach:** Pin Node 24.19.0 and pnpm 11.22.0, the current Node 24 LTS and pnpm releases available while implementing the migration. CI and the DevContainer use the same major and exact Node version.

## Image layout

**Question:** Should documentation images move to `public/` or remain beside Markdown?

**Selected approach:** Keep assets beside Markdown under `src/content/docs/`. The source tree contains hundreds of duplicate image names, and colocation preserves relative authoring links while Astro fingerprints rendered assets.

## URL transliteration

**Question:** How should German characters be normalized in canonical URL segments?

**Selected approach:** Transliterate `ae`, `oe`, `ue`, and `ss` before ASCII kebab-case normalization. This is readable, deterministic, and avoids dropping meaningful letters.

## Azure redirect capacity

**Question:** How should the full exact 301 map be deployed when Azure Static Web Apps limits `staticwebapp.config.json` to 20 KB?

**Selected approach:** Generate and validate the complete legacy-to-canonical redirect artifact for audit and future edge import. Keep the deployable SWA configuration below its documented limit, use exact 301 rules for the highest-value root routes that fit, and provide a known-path client fallback from the custom 404 page. A complete server-side 301 cutover requires an Azure Front Door ruleset, an Azure Function, or confirmation from operations of another bulk-redirect facility; this is the only known infrastructure gap in the locked plan.

## UAT contacts

**Question:** Who signs off each top-level program during editorial UAT?

**Selected approach:** Produce the per-program checklist with contact fields marked `TBD`. Automated build, navigation, link, search, and redirect checks proceed, but named stakeholder sign-off remains an operational cutover item.
