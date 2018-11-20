const webpack = require('webpack');
const path = require('path');
const config = require('./config');

module.exports = {
  entry: {
    vendor: config.vendor.modules
  },
  output: {
    filename: '[name]_dll_[chunkhash:10].js',
    path: path.resolve(config.vendor.path),
    library: '[name]_dll_[chunkhash:10]'
  },
  mode: process.env.NODE_ENV,
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DllPlugin({
      context: process.cwd(),
      path: path.join(config.vendor.path, '[name].json'),
      name: '[name]_dll_[chunkhash:10]'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};