module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  "parser": "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
  ],
}