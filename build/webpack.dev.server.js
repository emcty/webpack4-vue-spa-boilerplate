const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const SetGlobalVariable = require("./plugins");


module.exports = merge.smartStrategy({
  entry: 'prepend',
  plugins: 'prepend'
})(webpackBaseConfig, {
  entry: {
    main: [
      'webpack-dev-server/client?/',
      'webpack/hot/only-dev-server'
      ]
  },
  optimization:{
    namedModules: true,
  },
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    open: false,
    clientLogLevel: 'warning',
    publicPath: '/',
    contentBase: path.resolve(__dirname,'../src'),
    port: config.dev.port,
    host: '0.0.0.0',
    inline: true,
    historyApiFallback: {
      index: '/'
    },
    hot: true,
    compress: true,
    proxy: config.dev.proxy
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {loader: 'vue-style-loader'}, 
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
              minimize: true,
              modules: true,//支持css module
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:8]'
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
          },
        ]
      },
      {
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options:{
          loaders: {
            css: ['vue-style-loader','css-loader','postcss-loader']
          }
        }
      },
      {
        test: /\.(?:woff2?|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'icons/[name].[ext]'
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
                  name: '[name].[ext]'
                }
              }
            ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'test',
      template: '../src/index.html',
      filename: 'index.html',
      chunksSortMode: 'dependency',
    }),
    new SetGlobalVariable(),
    
  ]
});

