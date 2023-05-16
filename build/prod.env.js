const fs = require("fs")
const path = require("path")
const { Configuration } = require('webpack')

/**
 * @type {Configuration}
 */
module.exports = {
  mode: "production",
  entry: {
    'index': path.join(__dirname, '../src/index.ts')
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}