/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-09 13:48:09
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 18:28:57
 * @FilePath: /turbo/apps/basic-item/mock/index.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});

// let configArray = [];

// // 使用webpack的require.context()遍历所有Mock文件
// const files = require.context('./data', true, /\.js$/);

// files.keys().forEach((key) => {
//     configArray = configArray.concat(files(key).default);
// });

// // 注册所有的Mock服务
// configArray.forEach((item) => {
//     for (let [path, target] of Object.entries(item)) {
//         let protocol = path.split('|');
//         Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
//     }
// });

Mock.mock('/api/login', {aa:1234}) // 推荐页面mock数据