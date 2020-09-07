const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
		['@styles']: path.resolve(__dirname, './src/styles'),
		['@assets']: path.resolve(__dirname, './src/assets'),
		['@views']: path.resolve(__dirname, './src/views'),
    ['@cmp']: path.resolve(__dirname, './src/components'),
		['@']: path.resolve(__dirname, './src'),
  }),
);
