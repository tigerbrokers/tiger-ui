
module.exports = {
  entry: {
    app: 'app.js',
    preview: [':hot:', 'preview.js']
  },
  dist: 'docs',
  port: 5000,
  // compile Vue template
  templateCompiler: true,
  // no code split for 3rd party libraries
  vendor: false,
  html: [{
    chunks: ['app'],
    filename: 'index.html'
  }, {
    chunks: ['preview'],
    filename: 'preview.html'
  }]
}
