const path = require('path');
const baseConf = require('./webpack.config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseConf, {
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.less/,
        loader: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 9090,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    inline: true,
    hot: true,
    compress: true,
    open: false,
    overlay: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.join(__dirname, 'template.html')
        }
      ]
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})