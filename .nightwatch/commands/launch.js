exports.command = function ([spot, scen], callback) {
  const url = this.launch_url + `?spot=${spot}&scenario=${scen}`
  this
    .url(url)
    .waitForElementVisible('iframe', 4000)
    .frame(0)

  if (typeof callback === 'function') {
    callback.call(this)
  }

  return this
}

