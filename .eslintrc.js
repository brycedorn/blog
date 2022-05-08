module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    indent: ["error", 2],
    semi: ["error", "never"],
    "@typescript-eslint/no-unused-vars": "off"
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}