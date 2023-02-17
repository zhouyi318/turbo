<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-17 12:09:45
 * @FilePath: /turbo/apps/basic-item/src/views/home/index.vue
-->
<template>
  <h2>首页 - home</h2>
<button @click="onAdd">+onAdd</button>
</template>

<script>
// import { request } from "utils";
import { $http } from "utils";
export default {
  methods: {
    onAdd() {
      console.log("request");
      $http
        .post("/getUsers")
        .then((res) => {
          console.log("在console中看到数据", res); //在console中看到数据
        })
        .catch((res) => {
          console.log("在console中看到数据", res); //在console中看到数据
        });
    },
  },
};
</script>
