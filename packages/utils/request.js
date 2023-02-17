/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 17:07:27
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-17 12:23:50
 * @FilePath: /turbo/packages/utils/request.js
 * @Description: umi-request 官网 - https://github.com/umijs/umi-request
 */
import axios from "axios";
import { showFailToast, showLoadingToast, closeToast } from 'vant';
import 'vant/es/toast/style';

const API_BASEURL_MAP = {
	development: '/api',
	production: '/'
}

// 接口地址
const baseUrl = API_BASEURL_MAP[process.env.NODE_ENV];

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

// 请求 loading 处理
let count = 0;
const loadinghandler = {
	satrt(loading) {
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
	end(loading) {
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

class AxiosUtil {
	constructor() {
		this.http = axios.create({
			baseURL: baseUrl,
			timeout: 3000,
		})
		this.addInterceptors();
	}

	// 扩展配置
	extendRequest(method, url, data) {
		return this.http({
			method,
			url,
			data: method == "post" ? data : "",
			params: method == "get" ? data : "",
		})
	}

	// 请求主体
	request(method, url, data, loading) {
		return Promise.resolve()
			.then(loadinghandler.satrt(loading))
			.then(() => this.extendRequest(method, url, data))
			.then(loadinghandler.end(loading))
			.then((res) => {
				console.log(22222, res)
			})
			.catch(errorHandler);
	}

	// POST 请求
	post(url, data, loading = true) {
		return this.request("post", url, data, loading);
	}

	// GET 请求
	get(url, data, loading = true) {
		return this.request("get", url, data, loading);
	}

	// 拦截器
	addInterceptors() {
		// 请求拦截
		this.http.interceptors.request.use(
			(config) => {
				// 可以做一些操作,例如拦截添加token
				return config;
			},
			(err) => {
				return Promise.reject(err);
			}
		);

		// 响应拦截器
		this.http.interceptors.response.use(
			(res) => {
				// 处理请求回来的东西
				return Promise.resolve(res);
			},
			(err) => {
				return Promise.reject(err);
			}
		);
	}
}

const $http = new AxiosUtil();
export default $http;



// // request 请求包装
// const weworkRequest = extend({
//     method:'post',
//     prefix: '/',
//     timeout: 1000,
//     headers: {
//         'Content-Type': 'multipart/form-data',
//     },
// });

// const weworkRequest1 = ({ method = 'post', url, params = {}, loading = true }) => {

//     // if (!url) {
//     //     return showFailToast('错误：请求地址"URL"为空！');
//     // }

//     const initParams = {
//         method,
//         errorHandler, // 默认错误处理
//         credentials: 'include', // 默认请求是否带上cookie
//         prefix: baseUrl, //统一添加/api请求前缀
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//     };

//     if (method === 'get') {
//         initParams.params = params;
//     } else {
//         initParams.data = params;
//     }

//     const extendRequest = extend({ ...initParams });

//     return Promise.resolve()
//         .then(loadinghandler.request(loading))
//         .then(() => extendRequest())
//         .then(loadinghandler.response(loading))
//         .then(({ response }) => response)
//         .catch(errorHandler);
// };