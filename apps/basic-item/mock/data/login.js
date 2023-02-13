/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-09 13:49:17
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 17:01:08
 * @FilePath: /turbo/apps/basic-item/src/mock/data/login.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
// 登录
let Login = {
    "code": 0,
    "msg": "success",
    "data": {
        userName: '周毅',
        userId: 'mskj-zhouyi'
    }
}

export default {
    'post|login': option => {
        return Login
    }
}