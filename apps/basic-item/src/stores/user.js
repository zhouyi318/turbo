/*
 * @Author: 周毅
 * @Date: 2023-02-22 19:31:46
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-22 22:30:39
 * @FilePath: /wework/apps/basic-item/src/stores/user.js
 */
import { defineStore } from "pinia";
import { $http, storage } from "utils";
import { router } from "@/router/index.js";

const Storage = new storage();
export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: {},
    };
  },
  actions: {
    queryData(mcpCode, restProps) {
      return $http.post("/getRankingList", {
        mcpCode,
        ...restProps,
      });
    },
    getUserInfo(mcpCode, restProps) {
      return Promise.resolve()
        .then(() => this.queryData(mcpCode, restProps))
        .then((res) => {
          // 获取初始化路由地址
          const redirectRouter = Storage.get("wework_redirect");

          this.userInfo = res;
          Storage.set("wework_user_info", res);
          router.push(redirectRouter);
        });
    },
  },
});
