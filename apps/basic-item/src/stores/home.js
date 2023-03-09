/*
 * @Author: 周毅
 * @Date: 2023-03-01 15:36:01
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 10:52:07
 * @FilePath: /wework/apps/basic-item/src/stores/home.js
 */
import { defineStore } from "pinia";
import { $http, $array } from "utils";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      // 菜单数据
      menuList: [],
      menuTotal: 0,
      menuCardNumber: [],
      // 首页Card数据
      cardList: [],
      cardTotal: 0,
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
    getCardList(props) {
      return $http
        .post("/getCardList", {
          ...props,
        })
        .then((res) => {
          let data = res?.cardData?.cardList || [];
          let total = res?.cardData?.total || 0;
          this.cardList = data;
          this.cardTotal = total;
        });
    },
  },
});
