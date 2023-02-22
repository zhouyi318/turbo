/*
 * @Author: 周毅
 * @Date: 2023-02-17 17:37:44
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-22 20:19:08
 * @FilePath: /wework/apps/basic-item/mock/login.js
 */
// 获取系统参数配置
const Config = {
  QW_OAOUTH_URL: "https://open.weixin.qq.com/connect/oauth2/authorize",
  QW_APPID: "ww51ab38ddb9f7f60d",
  QW_CORP_ID: "ww51ab38ddb9f7f60d",
  QW_SCOPE: "snsapi_base",
  QW_USERCHECK_AGENTID: "CmbcWxwkCommunication",
  QW_CODEURL: "https://mcp.cmbc.com.cn/mcpWxAuth/wkAuth/wkpageCode",
  QW_RESPONSE_TYPE: "code",
  QW_TXZ_URL:
    "https://ment.cmbc.com.cn/CMBC_MBServer/new/app/mobile-bank/wx-sign/registry",
  QW_AGENTID: "1000043",
  QW_PAGE_SIGN: "e6bbb3730ec4edef14bcdf4246c8bde8",
  QW_DOMAIN_APPID: "AI2",
};

// 登录
let Login = {
  CUST_AVATAR:
    "https://wework.qpic.cn/wwpic/934058_GuYtgdwcQAODVvD_1675943435/0",
  MSG: "交易成功",
  CUST_DEPT_NAME: "总行网络金融部",
  STATUS: "1",
  CUST_IDX_VALUE: 0,
  CUST_RANKING: 0,
  CUST_USER_NAME: "周毅",
  WE_IDX_WE_LIST: [],
};

export default [
  {
    url: "/api/GetConfigService",
    method: "post",
    response: Config,
  },
  {
    url: "/api/getRankingList",
    method: "post",
    response: Login,
  },
];
