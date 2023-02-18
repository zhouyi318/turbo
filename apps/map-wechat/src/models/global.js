/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-12 11:10:55
 */
import { Toast } from 'antd-mobile';
import { querySecurityCode } from '@/services/query';
import { commitUserExtInfo } from '@/services/submit';

export default {
  namespace: 'global',
  state: {
    userInfo: null,
    taskId: null,
    supplementary: false,
    isShowVerifyCode: false,
    graphVerifyInfo: {},
    isOnSubmit: true,
    configInfo: {},
    authorization: false,
  },
  reducer: {
    update(prevState, { payload }) {
      console.log(payload);
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  thunk: {
    // 获取图形验证码
    getGraphVerifyCode({ payload }, { put }) {
      return querySecurityCode(payload).then(({ returnCode, securityCode, verifyCode }) => {
        if (returnCode.type !== 'S') {
          return Toast.fail(returnCode.message);
        }
        return put({
          type: 'global/update',
          payload: {
            isShowVerifyCode: true,
            graphVerifyInfo: {
              securityCode,
              verifyCode,
            },
          },
        });
      });
    },
    // 提交用户二次认证数据
    commitUserCheckInfo({ payload }, { put }) {
      put({
        type: 'global/update',
        payload: {
          isOnSubmit: false,
        },
      });

      return commitUserExtInfo(payload).then(({ returnCode }) => {
        put({
          type: 'global/update',
          payload: {
            isOnSubmit: true,
          },
        });

        if (returnCode.type !== 'S') {
          Toast.fail(returnCode.message);
          return put({
            type: 'global/getGraphVerifyCode',
            payload: {},
            async: true,
          });
        }

        put({
          type: 'global/update',
          payload: {
            supplementary: false,
            userInfo: null,
          },
        });

        return Toast.success('用户信息认证成功！', 2, () => {
          window.location.reload();
        });
      });
    },
  },
  subscription: {
    // 全局监听，例如下面监听 路由变化
    setUp({ history }) {
      history.listen(({ pathname }) => {
        // 记录上一个页面
        window.mfPreviousPage = window.mfCurrentPage;
        if (!window.mfPreviousPage) {
          window.mfPreviousPage = '';
        }
        window.mfCurrentPage = pathname;
      });
    },
  },
};
