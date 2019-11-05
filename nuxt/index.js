const { resolve } = require('path')

module.exports = function VueInputUi () {
  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-input-ui.js'
  })
}

module.exports.meta = require(__dirname, './../package.json')