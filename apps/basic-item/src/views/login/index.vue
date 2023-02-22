<!--
 * @Author: 周毅
 * @Date: 2023-02-17 16:12:16
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-22 22:27:22
 * @FilePath: /wework/apps/basic-item/src/views/login/index.vue
-->

<script setup>
import Login from "@/components/Loding/index.vue";
</script>

<template>
  <Login />
</template>

<script>
import { urlParams, login } from "utils";
import { mcpCodeTestUrl } from "@/constants/global.js";
import { useUserInfoStore } from "@/stores/user.js";
const ENV = process.env.NODE_ENV;
const store = useUserInfoStore();
const { mcpCode, ...restProps } = urlParams(window.location.href);

console.log("当前开发环境 - ", ENV);

// 跳转腾讯授权获取 - mcpCode
if (!mcpCode && JSON.stringify(store.userInfo) === "{}") {
  ENV === "development" ? (window.location.href = mcpCodeTestUrl) : login();
}

// 消费 mcpCode 获取用户信息
if (mcpCode && JSON.stringify(store.userInfo) === "{}") {
  store.getUserInfo(mcpCode, restProps);
}
</script>
