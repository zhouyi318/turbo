<!--
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-01 18:21:19
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 18:30:51
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
            request.get('/api/login').then(res => {
                console.log(res);//在console中看到数据
            }).catch(res => {
                alert('wrong');
            })
        }
    },
}
</script>