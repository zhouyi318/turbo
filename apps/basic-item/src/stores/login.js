/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-09 11:39:09
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 11:46:34
 * @FilePath: /turbo/apps/basic-item/src/stores/login.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
import { defineStore } from 'pinia'

export const useLogintore = defineStore('login', {
    state: () => ({
        userName: '周毅',
        userId:'mskj-zhouyi',
    }),
    // 计算属性 (computed)
    getters: {
    },
    // 方法 (methods)
    actions: {
    },
})
