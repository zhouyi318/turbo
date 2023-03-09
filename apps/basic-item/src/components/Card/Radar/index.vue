<!--
 * @Author: 周毅
 * @Date: 2023-03-08 21:18:56
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 21:19:34
 * @FilePath: /wework/apps/basic-item/src/components/Card/Radar/index.vue
-->

<style lang="less">
@import url("./style.less");
</style>

<template>
  <div class="radar-card">
    <div class="radar-card-nodata" v-if="store.loading">
      <van-skeleton title :row="6" />
    </div>
    <div class="radar-card-main" v-else>
      <div class="radar-card-main-title">
        <img :src="getImageUrl('radar_icon.png')" alt="logo" />
      </div>
      <van-empty v-if="store.radarWeekCount === 0" image-size="80">
        <div class="radar-card-main-prompt">近7天没有互动客户</div>
      </van-empty>
      <van-swipe
        v-else
        :autoplay="5000"
        :show-indicators="false"
        vertical
        style="height: 122px"
      >
        <van-swipe-item
          v-for="(item, index) in store.radarWeekCardList"
          :key="index"
        >
          <div
            class="radar-card-main-row"
            v-for="_item in item"
            :key="_item.eventTime"
          >
            <div class="radar-card-main-row-user">
              <div>
                <img :src="_item.userAvatar" alt="userAvatar" />
                &nbsp;<van-text-ellipsis rows="10" :content="_item?.userName" />
              </div>
              <div>
                <van-text-ellipsis rows="1" :content="_item?.eventName" />
              </div>
              <div>{{ _item?.eventDate }}</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <van-button
        class="radar-card-main-btn"
        round
        size="small"
        type="primary"
        @click="onMore"
      >
        查看更多
      </van-button>
    </div>
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

const onMore = () => {
  router.push("/customer_radar");
};

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
