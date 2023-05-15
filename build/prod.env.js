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
}