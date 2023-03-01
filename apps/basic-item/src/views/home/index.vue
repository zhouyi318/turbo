<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2023-02-28 23:18:42
 * @FilePath: /turbo/apps/basic-item/src/views/home/index.vue
-->
<template>
  <van-swipe class="my-swipe" :loop="false" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHomeStore } from "@/stores/home.js";

const store = useHomeStore();
onMounted(async () => {
  await store.getMenuList();
});
</script>

<style>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 260px;
  background-color: #39a9ed;
}
</style>
