const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './public/e2e/*_test.js',
  output: 'dist',
  helpers: {
    Playwright: {
      waitForTimeout: 5000,
      show: process.env.HEADLESS === 'true' ? false : true,
      timeout: 5000,
    },
    REST:{}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'workshop'
}