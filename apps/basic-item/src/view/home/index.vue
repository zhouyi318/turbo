<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-03 21:22:46
 * @FilePath: /turbo/apps/basic-item/src/view/home/index.vue
-->
<template>
    <h2>首页 - home</h2>
    <button @click="onAdd">+onAdd</button>
</template>

<script>
import { request } from 'utils'
export default {
    methods: {
        onAdd() {
            request()
        }
    },
}
</script>