import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
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
      disable404Route: true,
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      sidebar,
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/rzl-herz-rot.svg',
        alt: 'RZL',
      },
      customCss: ['./src/styles/rzl.css'],
      // Shared social-share preview image (generated from the RZL wordmark,
      // see public/og-image.png). Starlight has no per-site `og:image`
      // option, so this is added directly via `head`; a page-level
      // `head:` in frontmatter can still override it per page.
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://hilfe.rzlsoftware.at/og-image.png' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://hilfe.rzlsoftware.at/og-image.png' },
        },
      ],
      components: {
        SocialIcons: './src/components/HainzLink.astro',
        Search: './src/components/ProgramSearch.astro',
        // Emits `data-pagefind-filter="program:<id>"` into the indexed body so
        // the search program filter can use native Pagefind filtering.
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
    }),
    // MDX is only used for the hand-authored homepage
    // (src/content/docs/index.mdx), which needs Starlight's <LinkCard>/
    // <CardGrid> components; every other page stays plain Markdown.
    mdx(),
  ],
});
