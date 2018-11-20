'use strict';

module.exports = {
  outputBase: './dist',
  port: 8091,
  vendor: {
    path: './node_modules/__vue-vendor-bundle__',
    modules: [
      'babel-polyfill',
      'axios',
      'vue-router',
    ]
  },
  mock: {
    contentBase: './mock',
    port: 8092
  }
}