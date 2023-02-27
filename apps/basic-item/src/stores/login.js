/*
 * @Author: 周毅
 * @Date: 2023-02-22 19:31:46
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 19:20:47
 * @FilePath: /wework/apps/basic-item/src/stores/login.js
 */
import { defineStore } from "pinia";
import { $http, storage, mockWxUtils } from "utils";
import { router } from "@/router/index.js";
import { jsApiList } from "@/constants/jsApiList.js"

const Storage = new storage();
export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: {},
    };
  },
  actions: {
    getUserInfo(mcpCode, restProps) {
      return $http
        .post("/qyWxlogin", {
          mcpCode,
          ...restProps,
        })
        .then((res) => {
          if (process.env.NODE_ENV === "development") {
            // 重写 wx JS-SDK 方法
            window.$wx = mockWxUtils(jsApiList);
          } else {
            window.$wx = window.wx;
          }

          if (res.isBindEmp !== "1") {
            router.push("/check");
          } else {
            // 存储用户信息
            this.userInfo = res;
            Storage.set("wework_user_info", res);

            // 获取初始化路由地址
            const redirectRouter = Storage.get("wework_redirect");
            router.push(redirectRouter);
          }
          return res;
        });
    },
    getAgentTicket(props) {
      return $http.post("/getAgentTicket", {
        ...props,
      });
    },
  },
});
