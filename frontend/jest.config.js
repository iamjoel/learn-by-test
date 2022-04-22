const type = process.env.TYPE
let testMatch
// testMatch 规则 https://github.com/micromatch/micromatch
switch(type) {
  case 'unit':
    testMatch = ['**/?(*.)+(spec|test).(js|ts|tsx)', '!**/?(*.)+(e2e|api).(spec|test).(js|ts|tsx)', '!**/vue/**']
    break
  case 'e2e': 
    testMatch = ['**/?(*.)+(e2e.)(spec|test).(js|ts|tsx)']
    break
  case 'all':
  case 'report':
  default:
    testMatch = ['**/?(*.)+(spec|test).(js|ts|tsx)']
    break
}

const config = {
  rootDir: "./",
  verbose: true,
  testMatch,
}
if(type === 'report') {
  // https://github.com/Hazyzh/jest-html-reporters
  config.reporters = [
    'default',
    ['jest-html-reporters', {
      filename: 'report.html',
      pageTitle: '通过测试来学习',
      expand: true,
      enableMergeData: true,
      dataMergeLevel: 2
    }]
  ]
}

module.exports = config