const fs = require("fs")
const path = require("path")
const { Configuration } = require('webpack')

const entryList = {}

let filenames = fs.readdirSync(path.join(__dirname, './../src/components'));

filenames.forEach(item => {
  let data = fs.statSync(path.join(__dirname, './../src/components/' + item));
  if (data.isDirectory()) entryList[item] = path.join(__dirname, `./../src/components/${item}/index.vue`)
  else entryList[item.split('.vue')[0]] = path.join(__dirname, `./../src/components/${item}`)
})

/**
 * @type {Configuration}
 */
module.exports = {
  mode: "production",
  entry: entryList,
  externals: {
    vue: 'Vue'
  },
  externalsType: 'window',
  optimization: {
    sideEffects: true,
    usedExports: true,
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: '/',
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
  },
}