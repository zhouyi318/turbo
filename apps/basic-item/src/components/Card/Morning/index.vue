<!--
 * @Author: 周毅
 * @Date: 2023-03-08 21:18:44
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 17:56:31
 * @FilePath: /wework/apps/basic-item/src/components/Card/Morning/index.vue
-->

<style lang="less">
@import url("./style.less");
</style>

<template>
  <div class="morning-card">
    <div class="morning-card-nodata" v-if="store.articleList.length === 0">
      <van-skeleton title :row="6" />
    </div>
    <div class="morning-card-main" v-else>
      <div class="morning-card-main-title">
        <img :src="getImageUrl('morning_icon.png')" alt="logo" />
        <div>&nbsp;|&nbsp;{{ date }}</div>
      </div>
      <van-swipe
        :autoplay="5000"
        :show-indicators="false"
        vertical
        style="height: 98px"
      >
        <van-swipe-item v-for="item in store.articleList" :key="item.OpenId">
          <div class="morning-card-main-item">
            <van-text-ellipsis
              rows="3"
              :content="'《' + item?.Author?.AuthorName + '》' + item.Title"
            />
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="morning-card-main-shares">
        已有&nbsp;{{ $string.thousandth(store.shareData) }}&nbsp;位同事分享
      </div>
      <van-button round size="small" type="primary" @click="onShare">
        分享
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMorningoStore } from "@/stores/morning.js";
import { getImageUrl } from "@/basic-utils/index.js";
import { $date, $string } from "utils";
import { router } from "@/router/index.js";

const store = useMorningoStore();
const date = ref($date.getMMDDDAY());

const onShare = () => router.push("/morning");

onMounted(async () => {
  // 早报导读数据请求，避免重复
  store.articleList.length === 0 && (await store.getNewsInfo());

  // 获取早报分享记录 - 实时
  await store.getShareNewsData();
});
</script>
