'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require("./config");
const postcssLoader = require('./postcss-loader.config');


module.exports = merge.smart(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([config.outputBase], {
      root: path.resolve('./'),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'test',
      template: '../src/index.html',
      filename: 'index.html',
      chunksSortMode: 'dependency',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader}, 
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
              modules: false,
              minimize: true  
            }
          },
          {
            loader: 'postcss-loader',
            options: {         
              plugins: () => [
                  require('precss')(),
                  require('postcss-cssnext')(), 
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options:{
          loaders: {
            css: MiniCssExtractPlugin.loader
          }
        }
      },
      {
        test: /\.(?:woff2?|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'icons/[name]-[hash:10].[ext]'
        }
      },
      {
        test: /\.(?:png|jpe?g|gif)$/,
        loaders: 
          [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[name]-[hash:10].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
              }
            }
          ]
      },
    ]
  },
});