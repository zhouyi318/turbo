/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 15:45:13
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 17:58:09
 * @FilePath: /turbo/apps/basic-item/src/main.js
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { router } from './router';
import App from './App.vue'

const NODE_ENV = process.env.NODE_ENV;
console.log("环境变量 “NODE_ENV” 值：", NODE_ENV)

// 开发环境引入本地mock数据
if (NODE_ENV === 'development') {
    require('../mock')
}

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
