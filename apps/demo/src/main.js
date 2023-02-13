/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-09 11:27:01
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 14:01:30
 * @FilePath: /turbo/apps/demo/src/main.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';

import './assets/main.css'

const NODE_ENV = process.env.NODE_ENV;
const app = createApp(App)

console.log("NODE_ENV", NODE_ENV)
app.use(createPinia())
app.use(router)

app.mount('#app')
