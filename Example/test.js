
module.exports = {
  'Demo test': function (browser) {
    browser
      .launch(['MyExampleName', 'button with text'])

    browser
      .assert.visible('#app')
      .assert.containsText('#app button', 'Helloo')

    browser
      .end()
  }
}
