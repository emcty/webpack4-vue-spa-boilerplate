const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const vendorManifestPath = path.resolve(config.vendor.path, 'vendor.json');
const vendorPath = path.resolve(config.vendor.path, 'vendor_dll.js');


module.exports = {
  cache: true, 
  context: path.resolve('src'),
  entry: {
    main: [
      path.resolve(__dirname, '../src/main.js'),
    ],
  },
  output: {
    path: path.resolve("./dist"),
    filename: '[name].[hash:10].js', 
    chunkFilename: 'js/[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve('./src'),
      path.resolve('node_modules')
    ],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  performance: {
    hints: false
  },
  optimization: {
    runtimeChunk: {
      name: 'webpack-runtime'
    },
    splitChunks:{
      chunks: 'async',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      //这一块需要再研究研究
      cacheGroups: {
        common: {
          chunks: 'initial',
          minChunks: 2 //为1时则加载不了业务代码所需要的js （有可能受上面的minChunks影响）
        },
        vendor: {
          name: 'common',
          chunks: 'initial',
          minSize: 0,
          minChunks: 2, //为1时则会再生成common.chunk.js文件
          priority: 10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:10].css"
    }),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(vendorManifestPath)
    }),
    new AddAssetHtmlPlugin({
      filepath: vendorPath,
      includeSourcemap: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
};






