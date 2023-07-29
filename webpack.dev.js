const { merge } = require('webpack-merge');
const { configDotenv } = require('dotenv');
const common = require('./webpack.common.js');

configDotenv();

module.exports = merge(common, {
    watch: true,
    mode: 'development',
    devServer: {
        port: process.env.PORT,
        host: process.env.HOST
    }
});
