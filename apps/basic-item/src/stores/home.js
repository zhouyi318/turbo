/*
 * @Author: 周毅
 * @Date: 2023-03-01 15:36:01
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-01 21:21:25
 * @FilePath: /wework/apps/basic-item/src/stores/home.js
 */
import { defineStore } from "pinia";
import { $http, $array } from "utils";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      menuList: [],
      menuTotal: 0,
    };
  },
  actions: {
    getMenuList(props) {
      return $http
        .post("/showMenuList", {
          ...props,
        })
        .then((res) => {
          let data = res?.menuData?.menuList || [];
          data = $array.sortBy(data, "menuSort");
          this.menuTotal = res?.menuData?.total || 0;
          this.menuList = data;
        });
    },
  },
});
