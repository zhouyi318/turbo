/*
 * @Author: 周毅
 * @Date: 2023-02-23 10:08:23
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-08 20:55:44
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
        this.local = window.localStorage;
        this.session = window.sessionStorage;
        this.initRun();
    }

    remove(key) {
        const data = this.local;
        const value = data[key];
        delete data[key];
        delete data[`${key}__wework__`];
        return value;
    }

    removeSession(key) {
        const data = this.session;
        const value = data[key];
        delete data[key];
        delete data[`${key}__wework__`];
        return value;
    }

    get(key) {
        const local = this.local;
        const expired = local[`${key}__wework__`] || Date.now() + 1;
        const now = Date.now();

        if (now >= expired) {
            return this.remove(key);
        }
        const value = local[key] ? JSON.parse(local[key]) : local[key];
        return value;
    }

    getSession(key) {
        const session = this.session;
        const value = session[key] ? JSON.parse(session[key]) : session[key];
        return value;
    }

    set(key, value, expired) {
        /*
         * set 存储方法
         * @ param {String} key 键
         * @ param {String} value 值，
         * @ param {String} expired 过期时间，以分钟为单位，非必须
         */
        const local = this.local;
        local[key] = JSON.stringify(value);
        if (expired) {
            local[`${key}__wework__`] = Date.now() + 1000 * 60 * expired;
        }
        return value;
    }

    setSession(key, value) {
        const session = this.session;
        session[key] = JSON.stringify(value);
        return value;
    }

    initRun() {
        const reg = new RegExp('__wework__');
        const local = this.local;
        const list = Object.keys(local);
        if (list.length > 0) {
            list.map(key => {
                if (!reg.test(key)) {
                    const now = Date.now();
                    const expires = local[`${key}__wework__`] || Date.now() + 1;
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