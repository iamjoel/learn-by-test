module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: 'standard',
  env: {
    jest: true
  },
  globals: {
    cy: 'readonly'
  },
  ignorePatterns: ['node_modules']
}
