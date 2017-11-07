const { series } = require('nps-utils') // series, rimraf

const INSTALL = 'npm install'
const INSTALL_EXACT = 'npm install -E'

module.exports.scripts = {
  default: 'node scripts/start.js',
  build: 'node scripts/build.js',
  setup: `${INSTALL}`,
  test: {
    default: 'nps test.run',
    // default: series.nps('test.pre', 'test.run', 'test.post'),
    silent: 'nps test.run.silent',
    // silent: series.nps('test.pre', 'test.run.silent', 'test.post'),
    watch: 'nps test.run.watch',
    // watch: series.nps('test.pre', 'test.run.watch', 'test.post'),    
    run: {
      default: 'node scripts/test.js --env=jsdom --forceExit',
      silent: 'node scripts/test.js --env=jsdom --forceExit --silent',
      watch: 'node scripts/test.js --env=jsdom --watch',
      coverage: 'node scripts/test.js --coverage'
    },
    coverage: 'nps test.run.coverage',
    // coverage: series.nps('test.pre', 'test.run.coverage', 'test.post'),
    // pre: {
    //   description: 'Run before all tests',
    //   default: `${INSTALL_ASTEROID_204}`,
    // },
    // post: `${INSTALL_ASTEROID_203}`,
  },
  check: {
    default: series.nps('check.lint', 'check.type'),
    // default: series.nps('check.format', 'check.lint', 'check.type'), // ISSUE 'format' breaks () {} 
    lint: 'tslint --fix -c ./tslint.json -p ./tsconfig.json \'./src/**/*.{ts,tsx}\'',
    type: 'tslint -p ./tsconfig.json \'./src/**/*.{ts,tsx}\'',
    format: 'prettier --write \'src/**/*.{ts,tsx}\''
  }
};
