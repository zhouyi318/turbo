const express = require('express');

const router = express.Router();
var dayjs = require('dayjs')
const axios = require('axios');
const Config = require('../configs/main.config.js');
const AccessToken = require('../server/accesstoken');
const { corp_id } = require('../configs/main.config.js');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

function getLoginURL(type) {
    if(!type) type = base;
    const corp_id = Config.corp_id;
    if(!corp_id){
        return "请在 configs/main.config.js 中填写 corp_id 信息"
    }
    if(!Config.agent_id){
        return "请在 configs/main.config.js 中填写 agent_id 信息"
    }
    if(!Config.site_base){
        return "请在 configs/main.config.js 中填写 site_base 信息"
    }
    if(!Config.app_path){
        return "请在 configs/main.config.js 中填写 app_path 信息"
    }
    const redirect_uri = encodeURI(Config.site_base + Config.app_path);
    const agent_id = Config.agent_id
    let  login_url ;
    if(type == 'base'){
        login_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${corp_id}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE&agentid=${agent_id}#wechat_redirect`;
    }
    else {
        login_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${corp_id}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_privateinfo&state=STATE&agentid=${agent_id}#wechat_redirect`;
    }
    return login_url
}

router.get(Config.home_path, function (req, res, next) {
    const login_url = getLoginURL('base');
    res.redirect(login_url);
});

// 网站根目录直接重定向到 app_path
if(Config.app_path != '/'){
    router.get('/', function (req, res, next) {        
        res.redirect(Config.app_path);
    });
}


router.get(Config.app_path, async function (req, res, next) {
    let { code } = req.query;
    if (code) {
        let access_token = await AccessToken.getToken();
        if (access_token) {
            let { data: user_data } = await axios.get(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${access_token}&code=${code}`);
            console.log('获取 user_data 成功', user_data)
            let user_id = user_data.UserId;
            let { data: user_detail_data } = await axios.get(`https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=${access_token}&userid=${user_id}`);
            console.log('获取成员详细信息成功', user_detail_data);
            req.session.user = user_detail_data;
        }
        else {
            res.render('error');
        }
    }

    let access_token 
    let expire_time
    try{
        access_token = await AccessToken.getToken()
        expire_time = localStorage.getItem('expire_time') || ''
    }catch(error){
        console.error('Access token wat not set')
    }

    let user = {};
    if (req.session.user) {
        user = req.session.user
    }

    const redirect_uri = encodeURI(Config.site_base + Config.app_path);

    let setting = {
        user: user,
        config: Config,
        access_token,
        expire_time: expire_time ?  dayjs.unix(expire_time).format('YYYY/MM/DD HH:mm:ss') : '',
        redirect_uri,
        login_url_base:getLoginURL('base'),
        login_url_private:getLoginURL('private')
    };
    res.render('../vue/dist/index.ejs', { global_data_string: JSON.stringify(setting) });


});

module.exports = router;
