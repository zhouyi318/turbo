/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 11:49:35
 */
import { extend } from 'umi-request';
// import { v4 as uuidv4 } from 'uuid';
// import dayjs from 'dayjs';
import { Toast } from 'antd-mobile';
import { ENV, LOC_REQUEST_API_PREFIX, UAT_REQUEST_API_PREFIX } from '@/constants/constant';

const prefix = ENV === 'development' ? LOC_REQUEST_API_PREFIX : UAT_REQUEST_API_PREFIX;
// const transDate = dayjs().format('YYYYMMDD');
// const transTime = dayjs().format('HHmmssSSS');
// const reqSeq = uuidv4().replace(/-/g, '');

const errorHandler = function (error) {
  const codeMap = {
    '021': '发生未知错误',
  };
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    console.log(codeMap[error.data.status]);
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.log(error.message);
  }

  throw error; // 如果throw. 错误将继续抛出.
};

// loading次数
let count = 0;

// 请求 loading 处理
const loadinghandler = {
  request(loading) {
    return res => {
      if (loading) {
        if (count === 0) {
          Toast.loading('', 0);
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
          Toast.hide();
          count = 0;
        }
      }

      return res;
    };
  },
};

const request = (transId, data, loading = false, method = 'post') => {
  const { transIdExpandParams = {}, ...restProps } = data;

  const params = {
    request: {
      body: {
        ...restProps,
      },
      header: {
        transId,
        ...transIdExpandParams,
      },
    },
  };

  const expandRequest = extend({
    method,
    data: params,
    errorHandler,
  });

  return Promise.resolve()
    .then(loadinghandler.request(loading))
    .then(() => expandRequest(prefix))
    .then(loadinghandler.response(loading))
    .then(({ response }) => response)
    .catch(errorHandler);
};

export default request;
