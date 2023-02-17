/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 21:21:14
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-17 11:18:34
 * @FilePath: /turbo/packages/utils/login.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/homeˆ
 */
function login() { 
    console.log('login')
}

// 企业微信模拟授权登录代码
const ewLogin = async () => {
    // 调用企业微信接口，获取用户信息
    const userInfo = await getQWUserInfo();
    // 将获取到的用户信息保存到本地存储
    localStorage.setItem("qwUserInfo", JSON.stringify(userInfo));
    // 跳转到授权成功页面
    window.location.href = '/success';
};

export default login