/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:31:18
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 16:33:54
 */
import CryptoJS from 'crypto-js';

// 解析 url 参数
export function urlParse(url) {
  const obj = {};
  const reg = /[?&][^?&]+=[^?&]+/g;
  const arr = url.match(reg);
  if (arr) {
    arr.forEach(item => {
      const tempArr = item.substring(1).split('=');
      const key = decodeURIComponent(tempArr[0]);
      const val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}

/* AES加密 */
export function encrypt(value, key = ')o!p@e#n$b^a&n*(') {
  const CBCOptions = {
    iv: CryptoJS.enc.Utf8.parse(key),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  };
  let val = value;
  if (typeof value === 'object') {
    val = JSON.stringify(value);
  }
  const strs = CryptoJS.enc.Utf8.parse(val);
  const keys = CryptoJS.enc.Utf8.parse(key);
  return CryptoJS.AES.encrypt(strs, keys, CBCOptions).toString();
}

/* AES解密 */
export function decrypt(value, key = ')o!p@e#n$b^a&n*(') {
  const CBCOptions = {
    iv: CryptoJS.enc.Utf8.parse(key),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  };
  const keys = CryptoJS.enc.Utf8.parse(key);
  const strs = CryptoJS.AES.decrypt(value, keys, CBCOptions);
  return strs.toString(CryptoJS.enc.Utf8);
}

/**
 *
 * @param {string} strAge 20001010 或者 2000-10-10 或者 2000/10/10
 * @returns 年龄段
 */
export function getAgeGroup(strAge) {
  const inStr = strAge + '';
  const yearTime = 1000 * 60 * 60 * 24 * 365;
  let [inTime, ageGroup] = [null, null];

  // eslint-disable-next-line eqeqeq
  if (strAge == undefined) {
    return false;
  }

  if (inStr.split('-').length === 3 || inStr.split('/').length === 3) {
    inTime = new Date(inStr).getTime();
  }

  if (inStr.length === 8) {
    const ageArray = [inStr.substr(0, 4), inStr.substr(4, 2), inStr.substr(6, 2)];
    inTime = new Date(ageArray.join('-')).getTime();
  }

  const age = parseInt((new Date() - inTime) / yearTime);

  if (age < 18) {
    ageGroup = '18岁以下';
  }
  if (age >= 18 && age <= 25) {
    ageGroup = '18-25岁';
  }
  if (age > 25 && age <= 35) {
    ageGroup = '26-35岁';
  }
  if (age > 35 && age <= 45) {
    ageGroup = '36-45岁';
  }
  if (age > 45 && age <= 55) {
    ageGroup = '46-55岁';
  }
  if (age > 55 && age <= 65) {
    ageGroup = '56-65岁';
  }
  if (age > 65) {
    ageGroup = '65岁以上';
  }
  return ageGroup;
}

/* 手机号脱敏 */
export function noPassByMobile(str) {
  // eslint-disable-next-line eqeqeq
  if (str != undefined) {
    const pat = /(\d{3})\d*(\d{4})/;
    return str.replace(pat, '$1****$2');
  }
  return '';
}

/* 姓名脱敏 */
export function noPassByName(str) {
  // eslint-disable-next-line eqeqeq
  if (str != undefined) {
    if (str.length === 2) {
      return str.substring(0, 1) + '*';
    }
    if (str.length === 3) {
      return str.substring(0, 1) + '*' + str.substring(2, 3);
    }
    if (str.length > 3) {
      return str.substring(0, 1) + '**' + str.substring(3, str.length);
    }
  } else {
    return '';
  }
}
export class Storage {
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
