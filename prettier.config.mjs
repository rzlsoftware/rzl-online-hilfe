/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 120,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro', useTabs: true },
    },
    {
      files: 'src/styles/*.css',
      options: { useTabs: true },
    },
  ],
};
