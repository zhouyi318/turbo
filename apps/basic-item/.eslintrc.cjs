/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-16 16:58:07
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
};
