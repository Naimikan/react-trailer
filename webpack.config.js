const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const getEntriesByPath = require('./scripts/get-entries-by-path');

const babelConfig = require(path.resolve(__dirname, './babel.config.js')); // eslint-disable-line import/no-dynamic-require

const sourcePath = path.resolve(__dirname, './src');
const buildPath = path.resolve(__dirname, './build');

module.exports = {
  mode: 'production',
  entry: getEntriesByPath(sourcePath),
  output: {
    path: buildPath,
    filename: '[name].js',
    library: 'react-trailer',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({ modulesFromFile: true }),
  ],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-trailer': sourcePath,
    },
  },
};
