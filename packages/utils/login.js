/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 21:21:14
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-22 20:20:17
 * @FilePath: /wework/packages/utils/login.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/homeˆ
 */
import $http from './request';

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

    const redirectUri = encodeURIComponent(
        `${QW_CODEURL}?agentid=${QW_AGENTID}&pageSign=${QW_PAGE_SIGN}&encrypType=1&corpid=${QW_CORP_ID}`
    );

    const oAouthRedirectUrl =  `${oAouthUrl}?appid=${QW_APPID}&redirect_uri=${redirectUri}&response_type=${QW_RESPONSE_TYPE}&scope=${QW_SCOPE}#wechat_redirect`;

    window.location.href = oAouthRedirectUrl;
};

export default login;