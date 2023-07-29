const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: true,
  mode: 'development',
  devServer: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
});
