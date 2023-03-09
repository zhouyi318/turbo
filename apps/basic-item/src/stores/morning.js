/*
 * @Author: 周毅
 * @Date: 2023-03-09 11:21:16
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 15:05:22
 * @FilePath: /wework/apps/basic-item/src/stores/morning.js
 */
import { defineStore } from "pinia";
import { $http } from "utils";

export const useMorningoStore = defineStore("morning", {
  state: () => {
    return {
      articleList: [],
      shareData: 0,
    };
  },
  actions: {
    getNewsInfo(props) {
      return $http
        .post("/getNewsInfo", {
          ...props,
        })
        .then((res) => {
          this.articleList = res?.ArticleList || [];
        });
    },
    getShareNewsData(props) {
      return $http
        .post("/getShareNewsData", {
          ...props,
        })
        .then((res) => {
          this.shareData = res?.totals || 0;
        });
    },
  },
});
