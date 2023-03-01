import { defineStore } from "pinia";
import { $http, $array } from "utils";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      menuList: [],
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
          this.menuList = data;
        });
    },
  },
});
