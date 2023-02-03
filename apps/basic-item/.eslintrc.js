/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 16:27:27
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-03 16:46:16
 * @FilePath: /turbo/apps/basic-item/.eslintrc.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2015,
        requireConfigFile: false
    },
    parserOptions: {
        'parser': 'babel-eslint',
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        "quotes": "off",
        "no-console": "off",
        "no-redeclare": "warn"
    },
}