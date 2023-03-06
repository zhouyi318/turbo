<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-01 22:24:59
 * @FilePath: /wework/apps/basic-item/src/views/home/index.vue
-->
<template>
  <div class="home">
    <div class="home-nodata" v-if="store.menuTotal === 0">HHHHHHH</div>
    <div class="home-header" v-else>
      <van-swipe
        class="home-header-swipe"
        indicator-color="white"
        :loop="false"
      >
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHomeStore } from "@/stores/home.js";

const store = useHomeStore();
onMounted(async () => {
  store.menuTotal === 0 && (await store.getMenuList());
});
</script>

<style lang="less">
@import url("./style.less");
</style>
