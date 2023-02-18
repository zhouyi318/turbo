<!--
 * @Author: 周毅
 * @Date: 2023-02-17 16:12:16
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-18 12:51:45
 * @FilePath: /wework/apps/basic-item/src/views/login/index.vue
-->
<template>
  <div className='loading'>
    <div className='loading-main'>
      <div className='loading-main-title'>加载中...</div>
      <div className='loading-main-animation'>
        <div>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $http } from "utils";
console.log(1234)
const getConfig = await $http.post("/GetConfigService", {
  keyGets: [
    "QW_OAOUTH_URL",
    "QW_APPID",
    "QW_CORP_ID",
    "QW_PAGE_SIGN",
    "QW_SCOPE",
    "QW_RESPONSE_TYPE",
    "QW_AGENTID",
    "QW_USERCHECK_AGENTID",
    "QW_DOMAIN_APPID",
    "CUBE_SP_NAME",
    "QW_CODEURL",
    "QW_TXZ_URL",
  ]
});
console.log(getConfig)
</script>

<style lang="less">
  @import "./style.less";
</style>
