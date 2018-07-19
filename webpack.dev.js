//
//
//
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const pixrem = require('pixrem');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  
  mode: 'development',
  
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    publicPath: '/',
    port: 8888,
    inline: true,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>  [
                pixrem ({unitPrecision: 3}),
                autoprefixer ({grid: true})
              ],
              sourceMap: true
            }
          },
          'sass-loader'           
        ]
      }      
    ]
  },

  plugins: [
    new StyleLintPlugin({
      context: '../src/stylesheets/pcp.scss'
    })
  ]
});