/*
 * @Author: 周毅
 * @Date: 2023-03-09 12:19:29
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 14:46:19
 * @FilePath: /wework/packages/utils/date.js
 */
class DateUtil {
  constructor() { }
  
  // 获取 XX月XX日 星期几
  getMMDDDAY() {
    const weekArrayList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = new Date().getDay();
    return `${month}月${day}日 ${weekArrayList[date]}`
  }
}

const $date = new DateUtil();
export default $date;