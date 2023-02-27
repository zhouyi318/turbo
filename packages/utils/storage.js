/*
 * @Author: 周毅
 * @Date: 2023-02-23 10:08:23
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 17:07:10
 * @FilePath: /wework/packages/utils/storage.js
 */
/**
 * 【方法】【说明】【入参】
 * 【get】【读取 key】【key】
 * 【set】【写入 key ，expires 是有效期，单位为天】【key, data, expires】
 * 【remove】【删除 key】【key】
-----------------------------------------------------------------------------
 *  案例
    const storage = new Storage();
    storage.set("userInfo", { name: "周毅", id: "zhouyi" }, 10 ); // 10小时后过期
    storage.get("userInfo"); // { name: "周毅", id: "zhouyi" }
    storage.remove("userInfo");
*/

class Storage {
    constructor() {
        this.source = window.localStorage;
        this.initRun();
    }

    remove(key) {
        const data = this.source;
        const value = data[key];
        delete data[key];
        delete data[`${key}__wework__`];
        return value;
    }

    get(key) {
        const source = this.source;
        const expired = source[`${key}__wework__`] || Date.now() + 1;
        const now = Date.now();

        if (now >= expired) {
            return this.remove(key);
        }
        const value = source[key] ? JSON.parse(source[key]) : source[key];
        return value;
    }

    set(key, value, expired) {
        /*
         * set 存储方法
         * @ param {String} key 键
         * @ param {String} value 值，
         * @ param {String} expired 过期时间，以分钟为单位，非必须
         */
        const source = this.source;
        source[key] = JSON.stringify(value);
        if (expired) {
            source[`${key}__wework__`] = Date.now() + 1000 * 60 * expired;
        }
        return value;
    }

    initRun() {
        const reg = new RegExp('__wework__');
        const source = this.source;
        const list = Object.keys(source);
        if (list.length > 0) {
            list.map(key => {
                if (!reg.test(key)) {
                    const now = Date.now();
                    const expires = source[`${key}__wework__`] || Date.now() + 1;
                    if (now >= expires) {
                        this.remove(key);
                    }
                }
                return key;
            });
        }
    }
}

export default Storage;