const type = process.env.TYPE
let testMatch

switch(type) {
  case 'unit': 
    testMatch = ['**/?(*.)+(spec|test).ts', '!**/?(*.)+(e2e.)(spec|test).ts']
    break
  // 还有些问题
  case 'e2e': 
    testMatch = ['**/?(*.)+(e2e.)(spec|test).ts']
    break
  case 'all':
  default:
    testMatch = ['**/?(*.)+(spec|test).ts']
    break
}

const config = {
  rootDir: "./",
  verbose: true,
  testMatch
}

module.exports = config