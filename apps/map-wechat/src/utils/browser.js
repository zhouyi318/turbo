/**
 * Created by lichuan on 17/7/3.
 */
const ua = window.navigator.userAgent;
const browser = {
  isMOA() {
    return ua.match(/\[(AWV.*?)\]/);
  },
  isAndroid() {
    return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
  },
  isIOS() {
    return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  },
};

export default browser;
