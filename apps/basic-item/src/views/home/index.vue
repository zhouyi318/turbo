<!-- eslint-disable no-unused-vars -->
<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-10 15:04:06
 * @FilePath: /wework/apps/basic-item/src/views/home/index.vue
-->
<style lang="less">
@import url("./style.less");
</style>

<script>
// 先将需要动态引入的组件在此注册
import MorningCard from "@/components/Card/Morning/index.vue";
import RadarCard from "@/components/Card/Radar/index.vue";
import ClientCard from "@/components/Card/Client/index.vue";
import TodoCard from "@/components/Card/Todo/index.vue";

export default {
  components: {
    MorningCard,
    RadarCard,
    ClientCard,
    TodoCard,
  },
};
</script>

<template>
  <div class="home">
    <!-- 菜单请求骨架屏 -->
    <div class="home-nodata" v-if="store.menuTotal === 0">
      <van-skeleton title :row="5" />
    </div>
    <!-- 菜单面板 -->
    <div class="home-header" v-else>
      <div class="home-header-bg" />
      <div class="home-header-main">
        <van-config-provider :theme-vars="homeThemeVars">
          <van-swipe
            class="home-header-main-swipe"
            indicator-color="#1989fa"
            :loop="false"
            :initial-swipe="swipeKey"
            @change="onChange"
          >
            <van-swipe-item
              v-for="(item, index) in store.menuCardNumber"
              :key="index"
            >
              <van-row gutter="6" align="center">
                <van-col
                  class="home-header-main-swipe-card"
                  span="6"
                  v-for="(_item, _index) in item"
                  :key="index + _ + _index"
                >
                  <div
                    class="home-header-main-swipe-card-item"
                    :key="_item.menuId"
                    @click.stop="onMues(_item)"
                  >
                    <img :src="getImageUrl(_item.menuImgUrl)" alt="menu" />
                    <div>{{ _item.menuName }}</div>
                  </div>
                </van-col>
              </van-row>
            </van-swipe-item>
          </van-swipe>
        </van-config-provider>
      </div>
    </div>
    <!-- 组件面板 -->
    <div class="home-card">
      <van-row justify="space-between" gutter="15">
        <van-col
          class="home-card-list"
          span="12"
          v-for="component in store.cardList"
          :key="component.cardId"
        >
          <div class="home-card-list-item">
            <component :is="component.componentName" />
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useHomeStore } from "@/stores/home.js";
import { getImageUrl } from "@/basic-utils/index.js";
import { router } from "@/router/index.js";
import { $storage } from "utils";

const store = useHomeStore();

// 设置 vant swipe 下方未激活按钮颜色
const homeThemeVars = reactive({
  swipeIndicatorInactiveBackground: "#333",
});

// 存储 swipe 当前 key 值，便于详情页返回后还原
const swipeKey = ref($storage.getSession("wework_swipe_key") || 0);

// swipe 切页存储 Key 值
const onChange = (key) => {
  $storage.setSession("wework_swipe_key", key);
};

// 点击菜单，进入详情页
const onMues = (item) => {
  router.push(item.menuUrl);
};

onMounted(async () => {
  // 菜单数据请求，避免重复
  store.menuTotal === 0 && (await store.getMenuList());

  // 首页Card组件请求，避免重复
  store.cardTotal === 0 && (await store.getCardList());
});
</script>
