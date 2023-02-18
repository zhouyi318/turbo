/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:35:04
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 15:35:35
 */
import 'antd-mobile/lib/icon/style/index.css';
import browser from '@/utils/browser';

/**
 * 自定义SVG图标
 * @param {string} type 图标路径，/assets/svg/[XXX]/[XXX].svg
 * @param {string} className 自定义图标 class
 * @param {string} size 图标大小，支持xxs、xs、sm、md、lg
 * @param {string} color 图标颜色
 * @param {any} restProps 其它扩展属性，例如onClick等
 */
export default function CustomIcon({ type, className = '', size = 'md', ...restProps }) {
  if (!type) {
    throw new Error('<CustomIcon type="xxx" /> 组件必须传入一个 type 属性且指定 svg 文件位置!!');
  }
  // 加载图标
  // eslint-disable-next-line import/no-dynamic-require
  const myType = require(`@/assets/svg/${type}.svg`);

  // 如果传入 color 属性，删除 svg 自带填充色
  const RE = /fill="#[\u4E00-\u9FA5_a-zA-Z0-9_]{3,6}"/g;

  // IOS 和 Android 删除 fill 自带颜色
  if (restProps.color && browser.isAndroid()) {
    myType.default.node.innerHTML = myType.default.node.innerHTML.replace(RE, '');
  }
  if (restProps.color && browser.isIOS()) {
    myType.default.node.innerHTML = myType.default.node.innerHTML.replace(RE, '');
  }

  return (
    <svg
      className={`am-icon am-icon-${myType.default.id} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={`#${myType.default.id}`} />
    </svg>
  );
}
