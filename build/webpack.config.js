const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const Asset_Path = isDev ? '/public/' : '/';

module.exports = {
  target: 'web',
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: Asset_Path
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/resources/images/[name].[ext]',
              limit: 1024,
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/resources/fonts/[name].[ext]',
            limit: 1024
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack的分组打包配置',
      template: path.join(__dirname, 'template.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? "'development'" : "'production'"
      }
    })
  ],
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}