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
      // Disabled: remark-smartypants runs before our custom remarkPlugins and
      // converts straight quotes to curly quotes, which breaks the
      // `{:width="..."}` attr_list matching in remark-mkdocs-attributes.ts
      // (it expects straight quotes). English-style smart quotes are also
      // not appropriate for German content, and the legacy MkDocs/pymdown
      // site never applied this transform, so disabling it is closer to
      // legacy parity too.
      smartypants: false,
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
      favicon: '/favicon.svg',
      customCss: ['./src/styles/rzl.css'],
      components: {
        SocialIcons: './src/components/HainzLink.astro',
        Search: './src/components/ProgramSearch.astro',
      },
    }),
  ],
});
