module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      "eslint:recommended",
      "plugin:nuxt/recommended"
    ],
    rules: {
      'max-lines': ["error", 1500],
      'max-params': ["error", 7],
      'max-statements': ["error", 25]
    }
  };
  