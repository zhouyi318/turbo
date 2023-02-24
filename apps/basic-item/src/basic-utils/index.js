/*
 * @Author: 周毅
 * @Date: 2023-02-24 19:32:46
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-24 19:33:10
 * @FilePath: /wework/apps/basic-item/src/utils/index.js
 */
export const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
