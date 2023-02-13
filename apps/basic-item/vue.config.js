/*
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-03 15:45:13
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 11:35:12
 * @FilePath: /turbo/apps/basic-item/vue.config.js
 */
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  devServer: {
    port: 8888
  }
};
