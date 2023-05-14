const fs = require("fs")
const path = require("path")
const { Configuration } = require('webpack')

/**
 * @type {Configuration}
 */
module.exports = {
  mode: "development",
  entry: {
    'index': path.join(__dirname, '../src/index.ts')
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: '/',
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    client: {
      logging: 'error',
      overlay: true
    },
    hot: true,
    port: 9000,
  }
}