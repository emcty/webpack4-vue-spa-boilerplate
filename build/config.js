'use strict';

module.exports = {
  outputBase: './dist',
  port: 8099,
  vendor: {
    path: './node_modules/__vue-vendor-bundle__',
    modules: [
      'babel-polyfill',
      'axios',
      'vue',
      'vuex',
      'vue-router',
    ]
  },
  mock: {
    contentBase: './mock',
    port: 8092
  }
}