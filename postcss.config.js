module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
        customProperties: false
      },
      autoprefixer: {
        browsers: [
          'last 5 Chrome versions',
          'last 2 Safari versions'
        ]
      },
    },
    'cssnano': {
      autoprefixer: false
    }
  }
}
