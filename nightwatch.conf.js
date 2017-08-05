module.exports = {
  src_folders: ['.'],
  output_folder: false,
  test_workers: false,
  globals_path: './.nightwatch/global-test.js',
  custom_commands_path: './.nightwatch/commands',
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:5001',
      filter: '**/test.js',
      exclude: [
        'docs',
        'node_modules',
        '.nightwatch'
      ],
      compatible_testcase_support: true,

      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: '',

      desiredCapabilities: {
        browserName: 'Chrome',
        chromeOptions: {
          args: ['--headless', '--no-sandbox']
        },
        acceptSslCerts: true
      }
    }
  }
}
