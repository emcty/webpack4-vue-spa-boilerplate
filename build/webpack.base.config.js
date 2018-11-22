const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve('./src'),
      path.resolve('node_modules')
    ]
  },
  performance: {
    hints: false
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks:{
      chunks: 'async',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        common: {
          chunks: 'initial',
          minChunks: 2
        },
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2,
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
      filename: "[name].[hash:10].css",
      chunkFilename: "[name].[hash:10].css"
    }),
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
}