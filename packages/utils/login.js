/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 21:21:14
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 12:29:58
 * @FilePath: /wework/packages/utils/login.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/homeˆ
 */
import $http from './request';
import $storage from './storage';

// 企业微信授权登录
export const oAouthUrl = "https://open.weixin.qq.com/connect/oauth2/authorize";


const login = async () => {
    const {
        QW_CODEURL,
        QW_AGENTID,
        QW_PAGE_SIGN,
        QW_CORP_ID,
        QW_APPID,
        QW_RESPONSE_TYPE,
        QW_SCOPE,
    } = await $http.post("/GetConfigService", {
        keyGets: [
            "QW_OAOUTH_URL",
            "QW_APPID",
            "QW_CORP_ID",
            "QW_PAGE_SIGN",
            "QW_SCOPE",
            "QW_RESPONSE_TYPE",
            "QW_AGENTID",
            "QW_USERCHECK_AGENTID",
            "QW_DOMAIN_APPID",
            "CUBE_SP_NAME",
            "QW_CODEURL",
            "QW_TXZ_URL",
        ],
    });

    // 存储应用参数
    $storage.setSession("wework_config", { QW_CORP_ID, QW_AGENTID });

    // 重定向地址
    const redirectUri = encodeURIComponent(
        `${QW_CODEURL}?agentid=${QW_AGENTID}&pageSign=${QW_PAGE_SIGN}&encrypType=1&corpid=${QW_CORP_ID}`
    );

    // 微信授权地址
    const oAouthRedirectUrl = `${oAouthUrl}?appid=${QW_APPID}&redirect_uri=${redirectUri}&response_type=${QW_RESPONSE_TYPE}&scope=${QW_SCOPE}#wechat_redirect`;

    // 重定向至微信授权URL
    window.location.href = oAouthRedirectUrl;
};

const testLogin = async () => {
    // 用于本地模拟用户登录
    const mcpCodeTestUrl = "http://localhost:8888/basic/home?mcpCode=36FDF7CF29C&corpid=ww51ab38ddb9f7f60d&errcode=0&agentid=1000043"

    // 模拟用户登录
    $storage.setSession("wework_config", { QW_CORP_ID: "ww51ab38ddb9f7f60d", QW_AGENTID: "1000105" });
    window.location.href = mcpCodeTestUrl;
}

login.test = testLogin;
export default login;