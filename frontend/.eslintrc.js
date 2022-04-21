module.exports = {
  root: true,
  extends: "standard",
  env: {
    jest: true
  },
  globals: {
    cy: "readonly",
  },
  ignorePatterns: ["node_modules"],
}