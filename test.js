const assert = require('assert')
const TigerUI = require('./dist/tiger-ui.js')

module.exports = {
  'Test build': function (browser) {
    assert.equal(typeof TigerUI.default.version, 'string')
    assert.ok(Array.isArray(TigerUI.list))
    assert.equal(typeof TigerUI.default.install, 'function')
  }
}
