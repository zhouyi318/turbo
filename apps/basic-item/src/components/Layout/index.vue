<!--
 * @Author: 周毅
 * @Date: 2023-02-17 14:52:49
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-01 22:18:49
 * @FilePath: /wework/apps/basic-item/src/components/Layout/index.vue
-->
<template>
  <div class="layout">
    <div class="layout-basic">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="manager" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { router } from "@/router/index.js";

const active = ref("home");
const onChange = (val) => {
  active.value = val;
  router.push(`/${val}`);
};

watch(
  () => router.currentRoute.value,
  (value) => {
    const { name } = value;
    active.value = name;
  },
  { immediate: true }
);
</script>

<style lang="less">
@import url("./style.less");
</style>
