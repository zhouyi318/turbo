<!--
 * @Author: 周毅
 * @Date: 2023-02-17 16:12:16
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 19:48:52
 * @FilePath: /wework/apps/basic-item/src/views/login/index.vue
-->

<!-- <script setup>
import Login from "@/components/Loding/index.vue";
</script> -->

<template>
  <Login />
</template>

<script>
import Login from "@/components/Loding/index.vue";
import { showFailToast } from "vant";
import { urlParams, login, storage } from "utils";
import { useUserInfoStore } from "@/stores/login.js";
import { jsApiList } from "@/constants/jsApiList.js";

const ENV = process.env.NODE_ENV;
const store = useUserInfoStore();
const Storage = new storage();
const { mcpCode, ...restProps } = urlParams(window.location.href);

export default {
  components: {
    Login,
  },
  created() {
    // 跳转腾讯授权获取 - mcpCode
    if (!mcpCode && JSON.stringify(store.userInfo) === "{}") {
      if (ENV === "development") {
        // 模拟登录
        login.test();
      } else {
        login();
      }
    }

    // 消费 mcpCode 获取用户信息
    if (mcpCode && JSON.stringify(store.userInfo) === "{}") {
      store.getUserInfo(mcpCode, restProps).then((res) => {
        store
          .getAgentTicket({
            url: window.location.host,
            agentId: res.AGENT_ID,
            corpId: res.CORP_ID,
          })
          .then((_res) => {
            // 注入企业身份与权限;
            window.$wx.config({
              beta: true,
              debug: false,
              appId: res.CORP_ID,
              timestamp: _res.timestamp,
              nonceStr: _res.nonceStr,
              signature: _res.signatureConfig,
              jsApiList: ["invoke"],
            });

            window.$wx.ready(() => {
              // 注入应用身份与权限
              window.$wx.agentConfig({
                corpid: res.CORP_ID,
                agentid: res.AGENT_ID,
                timestamp: _res.timestamp,
                nonceStr: _res.nonceStr,
                signature: _res.signatureConfig,
                jsApiList: jsApiList,
                success() {
                  window.$wx.invoke("getContext", {}, (context) => {
                    if (context.err_msg === "getContext:ok") {
                      // 入口环境
                      const entry = context.entry;
                      Storage.set("wework_entry", entry);
                      console.log("当前运行环境-", entry);
                    }
                  });
                },
                fail(res) {
                  if (res.errMsg.indexOf("function not exist") > -1) {
                    return showFailToast("企业微信版本过低请升级");
                  }
                  return showFailToast(res.errMsg);
                },
              });
            });
          });
      });
    }
  },
};
</script>
