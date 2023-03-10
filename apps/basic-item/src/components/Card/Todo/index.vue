<!--
 * @Author: 周毅
 * @Date: 2023-03-10 14:19:32
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-10 15:04:40
 * @FilePath: /wework/apps/basic-item/src/components/Card/Todo/index.vue
-->
<style lang="less">
@import url("./style.less");
</style>

<template>
  <div class="todo-card">
    <div
      class="todo-card-nodata"
      v-if="JSON.stringify(store.myDeskCard) === '{}'"
    >
      <van-skeleton title :row="6" />
    </div>

    <div class="todo-card-main" v-else>
      <div class="todo-card-main-title">
        <img :src="getImageUrl('morning_icon.png')" alt="logo" />
      </div>
      <div class="todo-card-main-list">
        <div @click="onRoute('/stock_customer')">
          代办事项：<span>{{ store.myDeskCard.WECHAT_ALL_NUM }}</span>
        </div>
        <div @click="onRoute('/add_customer')">
          我的任务：<span>{{ store.myDeskCard.WECHAT_ADD_TODAY }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHomeStore } from "@/stores/home.js";
import { getImageUrl } from "@/basic-utils/index.js";
import { router } from "@/router/index.js";

const store = useHomeStore();

const onShare = () => router.push("/morning");

onMounted(async () => {
  // 早报导读数据请求，避免重复
  await store.getMyDesk();
});
</script>
