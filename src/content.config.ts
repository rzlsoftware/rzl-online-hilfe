import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        program: z.string().optional(),
        hideFooter: z.boolean().optional(),
      }),
    }),
  }),
  // Supplies the German Pagefind UI strings (see src/content/i18n/de.json).
  // Pagefind ships German translations itself, but its automatic language
  // detection is dead code in the bundled build: `automatic_translations` is
  // initialised to the English table and the `onMount` block that would pick a
  // table based on `<html lang>` calls a no-op SSR hook. Passing the strings
  // explicitly through Starlight's i18n collection makes them overrides, which
  // take precedence and therefore work regardless of that upstream bug.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
