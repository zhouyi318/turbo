/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 15:38:25
 */
// Apollo 项目专用
const eslintrc = {
  extends: [
    '@cmbc/eslint-config-apollo',
    'prettier'
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    },
  },
  plugins: [
    '@cmbc/apollo',
  ],
  rules: {
    '@cmbc/apollo/no-react-hooks': 1,
    '@cmbc/apollo/check-view-component': 2,
    '@cmbc/apollo/check-page-component': 2,
    '@cmbc/apollo/check-contents-and-documents-structure': 2,
    'import/named': 0,
    'import/no-unresolved': 0
  },
};

eslintrc.globals = {
  React: true,
  ReactDOM: true,
};

module.exports = eslintrc;
