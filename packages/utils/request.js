/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 17:07:27
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-09 17:01:17
 * @FilePath: /turbo/packages/utils/request.js
 * @Description: umi-request 官网 - https://github.com/umijs/umi-request
 */
import request, { extend } from 'umi-request';
import { showFailToast, showLoadingToast, closeToast } from 'vant';
import 'vant/es/toast/style';

const API_BASEURL_MAP = {
    development: '/api',
    production: '/'
}

// 接口地址
const baseUrl = API_BASEURL_MAP[process.env.NODE_ENV]

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

// 统一错误提示
const errorHandler = (error) => {
    const { response } = error;
    if (response && response.status) {
        console.log('errorHandler-response-', response);
        const errorText = codeMessage[response.status] || response.statusText;
        return response;
    };
}

// loading次数
let count = 0;

// 请求 loading 处理
const loadinghandler = {
    request(loading) {
        return res => {
            if (loading) {
                if (count === 0) {
                    showLoadingToast({
                        message: '加载中...',
                        forbidClick: true,
                    });
                }
                count += 1;
            }

            return res;
        };
    },
    response(loading) {
        return res => {
            if (loading) {
                count -= 1;
                if (count <= 0) {
                    closeToast();
                    count = 0;
                }
            }
            return res;
        };
    },
};

// request 请求包装
const weworkRequest = extend({
    method:'post',
    prefix: '/',
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

const weworkRequest1 = ({ method = 'post', url, params = {}, loading = true }) => {

    // if (!url) {
    //     return showFailToast('错误：请求地址"URL"为空！');
    // }

    const initParams = {
        method,
        errorHandler, // 默认错误处理
        credentials: 'include', // 默认请求是否带上cookie
        prefix: baseUrl, //统一添加/api请求前缀
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
    };

    if (method === 'get') {
        initParams.params = params;
    } else {
        initParams.data = params;
    }

    const extendRequest = extend({ ...initParams });

    return Promise.resolve()
        .then(loadinghandler.request(loading))
        .then(() => extendRequest())
        .then(loadinghandler.response(loading))
        .then(({ response }) => response)
        .catch(errorHandler);
};

// 所以请求拦截器
request.interceptors.request.use((url, options) => {
    // console.log('interceptors-request-', url, 'options-', options)
    return {
        url,
        options,
    }
})

//  所有响应拦截器
request.interceptors.response.use(async (response, options) => {
    // console.log('interceptors-response-', response, 'options-', options)
    return response;
});

export default weworkRequest;