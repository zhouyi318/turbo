<!--
 * @Author: 周毅
 * @Date: 2023-03-08 21:18:56
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 15:42:21
 * @FilePath: /wework/apps/basic-item/src/components/Card/Radar/index.vue
-->

<style lang="less">
@import url("./style.less");
</style>

<template>
  <div class="radar-card">
    <div class="radar-card-nodata" v-if="true">
      <van-skeleton title :row="6" />
    </div>
    <div class="radar-card-main" v-else>zaobao</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCustomerRadarStore } from "@/stores/customer_radar.js";
import { useUserInfoStore } from "@/stores/login.js";
import { getImageUrl } from "@/basic-utils/index.js";
import { $date, $string } from "utils";
import { router } from "@/router/index.js";

const store = useCustomerRadarStore();
const userStore = useUserInfoStore();

onMounted(async () => {
  // 获取近7日客户雷达数据 - 实时
  await store.getRadarList({
    staffId: userStore.userInfo.QW_USER_ID,
    eventType: [],
    dateType: "2",
    allowCount: true,
    start: 0,
    PAGE_SIZE: "20",
    NEXT_KEY: "1",
  });
});
</script>
