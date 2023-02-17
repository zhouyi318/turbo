/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-16 15:18:50
 * @FilePath: /turbo/apps/basic-item/src/main.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
