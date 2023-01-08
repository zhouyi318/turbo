/*
 * @Author: zhouyi
 * @Date: 2023-01-08 23:07:09
 * @LastEditTime: 2023-01-08 23:20:00
 * @LastEditors: zhouyi zhouyi@mskj.com
 * @FilePath: \wework\config\vue-config.js
 */
export default {
    // 通用配置
    general: {
        npmClient: 'yarn',
        hash: true,
        presets: [require.resolve('@umijs/preset-vue')],
    },
    // 客户经理端配置
    basic: {
        base: '/basic/',
        publicPath: '/basic/',
        outputPath: '../../dist/basic',
        title: '民生工作室',
        headScripts: [

        ],
        scripts: [

        ],
    },
    // 客户端配置
    share: {
        base: '/share/',
        publicPath: '/share/',
        outputPath: '../../dist/share',
        title: '中国民生银行',
        headScripts: [

        ],
        scripts: [

        ],
    }
}