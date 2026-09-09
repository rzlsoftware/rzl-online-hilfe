import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    '**/node_modules/**',
    '**/.*/**',
    'dist/**',
    'site/**',
    'output/**',
    'docs/**',
    'src/content/docs/**',
    'public/**',
    '**/*.generated.*',
  ]),
  {
    files: ['**/*.{js,mjs,ts,astro}'],
    extends: [js.configs.recommended],
  },
  // Extend every TS preset block to Astro frontmatter, including core-rule overrides.
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.astro'],
  })),
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },
  {
    files: ['*.{mjs,ts}', 'scripts/**/*.ts'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['src/components/**/*.{ts,js}', '**/*.astro/*.js'],
    languageOptions: { globals: globals.browser },
  },
  prettier,
);
