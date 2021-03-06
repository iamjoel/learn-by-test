module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: '.',
    project: ['./tsconfig.json']
  },
  extends: 'standard',
  env: {
    jest: true
  },
  globals: {
    cy: 'readonly'
  },
  ignorePatterns: ['node_modules', 'dist', 'coverage', '.eslintrc.js'],
}