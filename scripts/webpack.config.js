const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const babelConfig = require(path.resolve(__dirname, '../babel.config.js')); // eslint-disable-line import/no-dynamic-require

const sourcePath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(__dirname, '../build');

module.exports = {
  mode: 'production',
  entry: `${sourcePath}/index.js`,
  output: {
    path: buildPath,
    filename: 'react-trailer.js',
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
