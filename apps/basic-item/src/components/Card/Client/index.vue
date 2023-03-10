<!--
 * @Author: 周毅
 * @Date: 2023-03-10 14:19:32
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-10 14:41:47
 * @FilePath: /wework/apps/basic-item/src/components/Card/Client/index.vue
-->
<style lang="less">
@import url("./style.less");
</style>

<template>
  <div class="client-card">
    <div
      class="client-card-nodata"
      v-if="JSON.stringify(store.myDeskCard) === '{}'"
    >
      <van-skeleton title :row="6" />
    </div>

    <div class="client-card-main" v-else>
      <div class="client-card-main-title">
        <img :src="getImageUrl('radar_icon.png')" alt="logo" />
      </div>
      <div class="client-card-main-list">
        <div @click="onRoute('/stock_customer')">
          客户总数：<span>{{ store.myDeskCard.WECHAT_ALL_NUM }}</span>
        </div>
        <div @click="onRoute('/add_customer')">
          今日新增：<span>{{ store.myDeskCard.WECHAT_ADD_TODAY }}</span>
        </div>
        <div @click="onRoute('/lossing_customer')">
          今日流失：<span>{{ store.myDeskCard.WECHAT_LOSS_TODAY }}</span>
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
