/*
 * @Author: Zhou Yi
 * @Date: 2023-02-28 22:45:10
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2023-02-28 23:11:12
 */
import { sortBy } from "lodash";

class ArrayUtil {
  constructor() { }

  /**
   * @description: 数组对象，按照指定key，进行排序，默认升序
   * @param {object} data 数组对象
   * @param {string} key 排序的键值
   * @param {'up'|'down'} sort 排序方式，默认升序
   * @return {Array<object>}
   */
  sortBy(data, key, sort) {
    if(!Array.isArray(data)){
      console.warn("sortBy：第一个参数必须是Array")
      return []
    }
    return sortBy(data, (item) => {
      if(sort==='down') return -item[key];
      return item[key]
    });
  }
}

const $array = new ArrayUtil();
export default $array;