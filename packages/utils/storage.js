/**
 * 【方法】【说明】【入参】
 * 【get】【读取 key】【key】
 * 【set】【写入 key ，expires 是有效期，单位为天】【key, data, { expires }】
 * 【remove】【删除 key】【key】
 * 【once】【写入 key，读取一次后删除 key】【key, data, { expires }】
-----------------------------------------------------------------------------
 *  案例
    const storage = new Storage();
    storage.set("userInfo", { name: "周毅", id: "zhouyi" }, { expires: 10 }); // 10小时后过期
    storage.get("userInfo"); // { name: "周毅", id: "zhouyi" }
    storage.once("age", 18); // 写入Key为age，值为18，调用 get 后删除当前key
    storage.remove("userInfo");
*/
// class Storage {
//     constructor(options) { }
//     // 存数据前处理
//     _getInputData(data, options) {
//         const _data = {
//             data,
//             keyInfo: Object.assign(options, {
//                 timestamp: new Date().getTime()
//             })
//         };
//         return JSON.stringify(_data);
//     }

//     // 取数据后处理
//     _getOutputData(data) {
//         const _data = JSON.parse(data);
//         return _data;
//     }

//     // 获取_key的数据 => { data, keyInfo }
//     _getData(_key) {
//         const _data = localStorage.getItem(_key);
//         return this._getOutputData(_data);
//     }

//     // 特殊处理key
//     _getKey(key) {
//         return `__storage__${key}__`;
//     }

//     _remove(_key) {
//         localStorage.removeItem(_key);
//     }

//     // 是否有效期内
//     _isExpired(_key) {
//         const { keyInfo } = this._getData(_key);
//         const { expires, timestamp } = keyInfo;

//         if (!expires) {
//             return true;
//         }

//         return (
//             timestamp + expires * 3600 * 1000 - new Date().getTime() < 0
//         );
//     }

//     // 是否只读取一次
//     _isOnce(_key) {
//         const { keyInfo } = this._getData(_key);
//         const { isOnce } = keyInfo;
//         return !!isOnce;
//     }

//     get(key) {
//         const _key = this._getKey(key);
//         const _data = this._getData(_key);

//         if (!_data) {
//             return null;
//         }

//         const isExpired = this._isExpired(_key);
//         const isOnce = this._isOnce(_key);

//         // 删除已过期或者只读取一次的_key
//         if (isExpired || isOnce) {
//             this._remove(_key);
//         }
//         return isExpired ? null : _data.data;
//     }

//     set(key, data, options = {}) {
//         const _key = this._getKey(key);
//         const _data = this._getInputData(data, options);
//         localStorage.setItem(_key, _data);
//     }

//     remove(key) {
//         const _key = this._getKey(key);
//         this._remove(_key);
//     }

//     once(key, data, options = {}) {
//         const _key = this._getKey(key);
//         const _data = this._getInputData(
//             data,
//             Object.assign(options, {
//                 isOnce: true
//             })
//         );
//         localStorage.setItem(_key, _data);
//     }
// }

class Storage {
    constructor() {
        this.source = window.localStorage;
        this.initRun();
    }

    remove(key) {
        const data = this.source;
        const value = data[key];
        delete data[key];
        delete data[`${key}__expires__`];
        return value;
    }

    get(key) {
        const source = this.source;
        const expired = source[`${key}__expires__`] || Date.now() + 1;
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
            source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired;
        }
        return value;
    }

    initRun() {
        const reg = new RegExp('__expires__');
        const source = this.source;
        const list = Object.keys(source);
        if (list.length > 0) {
            list.map(key => {
                if (!reg.test(key)) {
                    const now = Date.now();
                    const expires = source[`${key}__expires__`] || Date.now() + 1;
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