const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./webpack.config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseConf, {
  output: {
    filename: 'assets/js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
      test: /\.less/,
      loader: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'less-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css'
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
})