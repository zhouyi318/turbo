const axios = require('axios');
const AccessToken = require('./accesstoken');
const Config = require('../configs/main.config.js')

module.exports = function(router) {    
    router.get('/user/get', async function (req, res, next) {
        const query = req.query || {};
        const access_token = await AccessToken.getToken();
        const { data } = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/user/get', {
            params: {
                access_token,
                userid: query.userid
            }
        });
        res.send(data);
    });
    
    

    router.get('/department/list', async function (req, res, next) {
        const query = req.query || {};
        if (!query.id) {
            query.id = 1;
        }
        const access_token = await AccessToken.getToken();
        
        let final_data = [];
        let filter_users = [];
        let filter_departments = [];
    
        const depart_response = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/department/list', {
            params: {
                access_token,
                id: query.id || ''
            }
        });
        const { data:{department:departmentlist} }  = depart_response;

                   
        departmentlist.forEach(item => {
            if (item.parentid == query.id) {
                filter_departments.push({
                    id: item.id,
                    name: item.name || '',
                    order: item.order,
                    type: 'department'
                });
            }
        });
        if(query.need_user == 1){
            const { data:{userlist} } = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/user/simplelist', {
                params: {
                    access_token,
                    department_id: query.id || '',
                    fetch_child: 0
                }
            });
    
            filter_users = userlist.map(user => {
                return {
                    id:user.userid || '',
                    name : user.name || '',
                    leaf : true,
                    type : 'user'
                };
            });

        }
        else{
            if (filter_departments.length > 0) {
                for (let index = 0; index < filter_departments.length; index++) {
                    let element = filter_departments[index];
                    if (departmentlist.some(item => {
                        return item.parentid == element.id
                    })) {
                        element.leaf = false;
    
                    } else {
                        element.leaf = true;
                    }
                }
            }
        }
        final_data = [].concat(filter_users,filter_departments);
        res.send(final_data);
    });   
    
};