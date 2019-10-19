const path = require('path');
const nodeExternals = require('webpack-node-externals');

const babelConfig = require(path.resolve(__dirname, 'babel.config.js')); // eslint-disable-line import/no-dynamic-require

const sourcePath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: `${sourcePath}/index.js`,
  output: {
    path: distPath,
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({ modulesFromFile: true }),
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
};
