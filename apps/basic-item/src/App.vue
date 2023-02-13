<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-03 15:45:13
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 16:11:59
 * @FilePath: /turbo/apps/basic-item/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {login} from 'utils';

export default {
  created() {
    console.log(`created`)
    login()
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
  // renderTracked(){
  //   console.log(`renderTracked`)
  // },
  // renderTriggered(){
  //   console.log(`renderTriggered`)
  // },
  // activated(){
  //   console.log(`activated`)
  // },
  // deactivated(){
  //   console.log(`deactivated`)
  // },
  // serverPrefetch(){
  //   console.log(`serverPrefetch`)
  // }
}
</script>

<style>
body {
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>