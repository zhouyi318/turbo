/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 15:45:13
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-03 17:00:39
 * @FilePath: /turbo/apps/basic-item/src/main.js
 */
import { createApp } from 'vue'
import { router } from './router';
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');
