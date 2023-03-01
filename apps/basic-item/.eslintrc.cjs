/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2023-02-28 21:41:34
 * @FilePath: /turbo/apps/basic-item/.eslintrc.cjs
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
