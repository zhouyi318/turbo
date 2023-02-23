<!--
 * @Author: 周毅
 * @Date: 2023-02-23 10:57:31
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-23 11:52:44
 * @FilePath: /wework/apps/basic-item/src/views/check/index.vue
-->

<template>
  <div class="check-header">
    <h3>身份认证</h3>
    <p>
      为保障您的账号权益，请先进行身份安全认证。安全认证仅在首次授权时进行。
    </p>
  </div>
  <div class="check-main">main</div>
  <div class="check-footer">
    <img :src="getImageUrl('mingsheng_logo.png')" alt="logo" srcset="logo" />
  </div>
</template>

<script setup>
function getImageUrl(name) {
  return new URL(`@/assets/${name}`, import.meta.url).href;
}
</script>
<style lang="less">
@import "./style.less";
</style>
