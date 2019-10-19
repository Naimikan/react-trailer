const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const babelConfig = require(path.resolve(__dirname, 'babel.config.js')); // eslint-disable-line import/no-dynamic-require

dotenv.config();

const sourcePath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const {
  HOST = 'localhost',
  PORT = 9000,
} = process.env;

module.exports = ({ isProduction = false } = {}) => {
  const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    node: {
      fs: 'empty',
    },
    entry: {
      app: ['@babel/polyfill', `${sourcePath}/index.js`],
    },
    devtool: 'source-map',
    output: {
      path: distPath,
      publicPath: '/',
      filename: '[name].[contenthash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    resolve: {
      symlinks: false,
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'assets',
          to: 'assets',
        },
      ]),
      new HtmlWebpackPlugin({
        template: `${sourcePath}/index.html`,
      }),
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
    devServer: {
      contentBase: distPath,
      compress: true,
      historyApiFallback: true,
      host: HOST,
      port: PORT,
    },
  };

  return webpackConfig;
};
