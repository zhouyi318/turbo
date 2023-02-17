<!--
 * @Author: 周毅
 * @Date: 2023-02-13 16:39:50
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-16 16:59:30
 * @FilePath: /turbo/apps/basic-item/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { login } from "utils";

export default {
  created() {
    login();
  },
  // beforeMount(){
  //   console.log(`beforeMount`)
  // },
  // mounted(){
  //   console.log(`mounted`)
  // },
  // beforeUpdate(){
  //   console.log(`beforeUpdate`)
  // },
  // updated(){
  //   console.log(`updated`)
  // },
  // beforeUnmount(){
  //   console.log(`beforeUnmount`)
  // },
  // unmounted(){
  //   console.log(`unmounted`)
  // },
  // errorCaptured(){
  //   console.log(`errorCaptured`)
  // },
};
</script>

<style>
body {
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
