/*
 * @Author: mskj-zhouyi zhouyi@mskj.com
 * @Date: 2023-02-03 15:45:13
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-03 20:58:55
 * @FilePath: /turbo/apps/basic-item/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
