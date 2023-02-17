/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-17 12:28:46
 * @FilePath: /turbo/apps/basic-item/mock/index.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
export default [
  {
    url: "/api/getUsers",
    method: "post",
    response: () => {
      return {
        code: 403,
        message: "ok",
        data: {
          "rows|10": [
            {
              id: "@guid",
              name: "@cname",
              "age|20-30": 23,
              "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
            },
          ],
        },
      };
    },
  },
];
