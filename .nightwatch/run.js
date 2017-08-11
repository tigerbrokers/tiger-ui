const poi = require('poi')
const config = require('../play.config.js')

poi(config).dev()
  .then(({ server }) => {
    server.listen(5001, () => {
      require('nightwatch/bin/runner.js')
    })
  })

