var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './dist',
  template: './index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/'
  },
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extends: ['vue2', 'lint', 'sass', 'autoprefixer']
});

module.exports = cooking.resolve();
