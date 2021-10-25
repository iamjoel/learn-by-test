const type = process.env.TYPE
let testMatch
if(type === 'e2e') {
  testMatch = ['**/?(*.)+(e2e.)(spec|test).ts']
} else {
  testMatch = ['**/?(*.)+(spec|test).ts', '!**/?(*.)+(e2e.)(spec|test).ts']
}

const config = {
  rootDir: "./",
  verbose: true,
  testMatch
}

module.exports = config