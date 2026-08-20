import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import { sidebar } from './src/nav/sidebar.generated.ts';
import remarkMkDocsAttributes from './src/plugins/remark-mkdocs-attributes.ts';

export default defineConfig({
  site: 'https://hilfe.rzlsoftware.at',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMkDocsAttributes],
    }),
  },
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
      sidebar,
    }),
  ],
});
