const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'tiger-ui.js',
    library: 'TigerUI',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {}
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  }
}
