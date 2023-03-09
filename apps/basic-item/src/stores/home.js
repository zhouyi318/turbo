/*
 * @Author: 周毅
 * @Date: 2023-03-01 15:36:01
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-08 18:57:46
 * @FilePath: /wework/apps/basic-item/src/stores/home.js
 */
import { defineStore } from "pinia";
import { $http, $array } from "utils";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      menuList: [],
      menuTotal: 0,
      menuCardNumber: [],
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
          let total = res?.menuData?.total || 0;
          let menuCardNumber = [];
          data = $array.sortBy(data, "menuSort");

          for (let i = 0, len = data.length; i < len; i += 8) {
            menuCardNumber.push(data.slice(i, i + 8));
          }

          this.menuTotal = total;
          this.menuList = data;
          this.menuCardNumber = menuCardNumber;
        });
    },
  },
});
