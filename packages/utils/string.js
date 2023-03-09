/*
 * @Author: 周毅
 * @Date: 2023-03-09 14:44:11
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 14:49:11
 * @FilePath: /wework/packages/utils/string.js
 */
class StringUtil {
  constructor() { }
  // 千分位
  thousandth(str) {
    return String(str).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
      return s + ','
    })
  }
}

const $string = new StringUtil();
export default $string;