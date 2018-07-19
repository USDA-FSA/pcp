//
//
//
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLBeautifyPlugin = require('html-beautify-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  
  devtool: 'source-map',

  entry:  {
    'fsa-style': './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "imports-loader?$=jquery"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'           
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/img/',
              name: '[name].[ext]',
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/fonts/',
              name: '[name].[ext]',
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  plugins:[
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[name].css"
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      options:{
        title: 'PCP II'
      }
    }),
    new HTMLBeautifyPlugin({
      config: {
          html: {
              end_with_newline: true,
              indent_size: 2,
              indent_with_tabs: true,
              indent_inner_html: true,
              preserve_newlines: true,
              unformatted: ['p', 'i', 'b', 'span']
          }
      },
      replace: [ ' type="text/javascript"' ]
    }),
    new CopyWebpackPlugin([
      {
        from: '/node_modules/fsa-style/src/stylesheets/',
        to: './src/stylesheets/'
      },
      {
        from: './src/js',
        to: './js/'
      },
      {
        from: './src/img',
        to: './img/'
      }
    ]),
  ]
};