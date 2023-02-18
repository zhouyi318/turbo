/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 19:09:06
 */
// 全局常量配置
const UAT_oAouthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';
const UAT_codeUrl = 'https://wxtest1.cmbc.com.cn/mcpWxAuth/wkAuth/wkpageCode';
const UAT_agentid = '1000043';
const UAT_userCheckAgentid = 'CmbcWxwkCommunication';
const UAT_appid = 'ww51ab38ddb9f7f60d';
const UAT_corpid = 'ww51ab38ddb9f7f60d';
const UAT_pageSign = 'e6bbb3730ec4edef14bcdf4246c8bde8';
const UAT_scope = 'snsapi_base';
const UAT_responseType = 'code';

export default {
  ENV: process.env.NODE_ENV, // 环境变量
  LOC_REQUEST_API_PREFIX: '/api', // 本地服务代理前缀
  UAT_REQUEST_API_PREFIX: 'https://wxtest1.cmbc.com.cn/cubegw/uat/cube_w/Public.json',
  oAouthUrl: UAT_oAouthUrl,
  codeUrl: UAT_codeUrl,
  agentId: UAT_agentid,
  userCheckAgentid: UAT_userCheckAgentid,
  appId: UAT_appid,
  corpId: UAT_corpid,
  pageSign: UAT_pageSign,
  scope: UAT_scope,
  responseType: UAT_responseType,
};
