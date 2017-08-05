module.exports = {
  src_folders: ['.'],
  test_workers: false,
  globals_path: './global-test.js',
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      filter: '**/*.test.js',
      compatible_testcase_support: true,

      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: '',

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless', '--no-sandbox']
        },
        acceptSslCerts: true
      }
    }
  }
}
