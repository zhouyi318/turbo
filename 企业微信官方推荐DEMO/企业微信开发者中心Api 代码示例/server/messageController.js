const axios = require('axios');
const AccessToken = require('./accesstoken');
const Config = require('../configs/main.config.js');

module.exports = function(router) {
    // 发送推送消息
    router.post('/message/send', async function (req, res, next) {
        // 从前端请求中获取对应的参数
        let {form:form_parames} = req.body || {};        
        // 将 agentid 拼入请求的结构体中
        let request_data  = {
            ...form_parames,
            agentid:Config.agent_id,
        };
        request_data.safe = form_parames.safe ? '1' : '0';
        // 获取 Access Token
        const access_token = await AccessToken.getToken();
        // 向消息推送的 Api 发送对应的数据结构体
        const {data} =  await axios.post('https://qyapi.weixin.qq.com/cgi-bin/message/send', 
        request_data,
        {
            params: {
                access_token
            }
            
        });
        // 返回请求的结果
        res.send(data);
    
    
    });
    
};