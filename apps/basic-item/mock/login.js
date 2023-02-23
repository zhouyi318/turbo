/*
 * @Author: 周毅
 * @Date: 2023-02-17 17:37:44
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-23 10:59:59
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
  MSG: "交易成功",
  empId: "MSKJ001011",
  AGENT_ID: "1000105",
  empMobile: "15655596667",
  QW_USER_ID: "mskj-zhouyi",
  SHOP_ID: "",
  CORP_USER_UUID:
    "eyJjb3JwSWQiOiJ3dzUxYWIzOGRkYjlmN2Y2MGQiLCJxd1VzZXJJZCI6Im1za2otemhvdXlpIiwidXVpZCI6ImJlZTk4N2UzMWYzNTQ2ZTRhZjVjNTRhMDk5ZGVmZTY2In0=",
  CORP_ID: "ww51ab38ddb9f7f60d",
  AUTH_FLAG: 0,
  qwMobile: "15655596667",
  STATUS: "1",
  empName: "周毅",
  AVATAR: "https://wework.qpic.cn/wwpic/934058_GuYtgdwcQAODVvD_1675943435/0",
  // isBindEmp: "1",
  // isBindEmpMsg: "员工已认证。",
  isBindEmp: "0",
  isBindEmpMsg: "没有查到[mskj-zhouyi]的员工号，请手动提交员工号。",
  IS_AUTH: "0",
};

export default [
  {
    url: "/api/GetConfigService",
    method: "post",
    response: Config,
  },
  {
    url: "/api/qyWxlogin",
    method: "post",
    response: Login,
  },
];
