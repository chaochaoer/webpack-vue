module.exports = {
  "parser": "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": false
    }
  }
}