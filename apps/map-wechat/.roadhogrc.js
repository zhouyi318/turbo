/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-12 21:20:39
 */
const path = require('path');
const px2rem = require('postcss-px2rem-exclude');

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/assets/svg'),
  // require.resolve('antd-mobile').replace(/warn\.js$/, '')
]
  
export default {
  //入口文件, 支持数组和glob匹配
  "entry": "src/index.js",
  "svgSpriteLoaderDirs": svgSpriteDirs,
  "cssModulesExclude": [
    './src/index.less',
    './src/themes'
  ],
  "publicPath": "/files/mmaqw/webVersion/CUSTINFO/",
  // "publicPath": "/",
  "outputPath": "./dist",
  "commonChunks": [{
    "name": "stable",
    "chunks": ["apollo"]
  }],
  "extraBabelPlugins": [
    //配置 babel plugins
    "transform-runtime",
    ["import", { "libraryName": "antd-mobile", "style": true }]
  ],
  "proxy": {
    "/api": {
      // "target": "https://111.205.207.179:10070/gw/cube_w/Public.json",
      "target": "https://wxtest2.cmbc.com.cn/cubegw/uat/cube_w/Public.json",
      "changeOrigin": true,
      "secure": false,
      'pathRewrite': { '^/api': '' },
    },
  },
  "externals": "",
  "extraPostCSSPlugins": [
    px2rem({
      "remUnit": 75,
      "exclude": /node_modules/i,
    }),
  ],
  "theme": "./theme.config.js",
  //html模板
  "templatePath": "src/index.ejs",
  "define": {
    REQUEST_MODE: process.env.REQUEST_MODE
  },
}
