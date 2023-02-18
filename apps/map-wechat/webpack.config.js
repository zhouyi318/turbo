/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 15:45:03
 */
const path = require('path');
const fs = require('fs');

export default function (webpackConfig) {
  webpackConfig.resolve.alias = {
    apollo: '@cmbc/apollo',
    public: path.resolve('public'),
    '@': path.resolve('src'),
  }

  try {
    fs.unlinkSync('./webpackConfig.json');
  } catch (err) {
    // 处理错误
  }

  fs.writeFileSync('./webpackConfig.json', JSON.stringify(webpackConfig));

  return webpackConfig
}
