const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { configDotenv } = require('dotenv');
configDotenv();

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'node',
  entry: './src/index.ts',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
