module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': 'warn',
  }
};