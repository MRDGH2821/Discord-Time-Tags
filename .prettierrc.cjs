/**
 * @type {import('prettier').Options}
 */
module.exports = {
  ...require('prettier-config-mrdgh2821'),
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  plugins: ['prettier-plugin-packagejson'],
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
        plugins: ['prettier-plugin-packagejson'],
        trailingComma: 'none',
      },
    },
    {
      files: '.prettierignore',
      options: {
        parser: 'markdown',
      },
    },
  ],
};
