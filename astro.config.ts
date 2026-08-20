import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hilfe.rzlsoftware.at',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'RZL Online Hilfe',
      description: 'Die RZL Online Hilfe',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      sidebar: [],
    }),
  ],
});
