/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 12:04:18
 */
import { Toast } from 'antd-mobile';
import { queryExtCustDetailInfo } from '../services/query';
import { csis_modifyExtCustRemarkInfo } from '../services/submit';

export default {
  namespace: 'customer',
  state: {
    external_userid: null,
    customerDetails: {},
    isGroup: false,
  },
  reducer: {
    update(prevState, { payload }) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  thunk: {
    // 查询外部联系人信息
    getExternalContactDetail({ payload }, { put }) {
      return queryExtCustDetailInfo(payload).then(({ returnCode, body }) => {
        if (returnCode.type !== 'S') {
          return Toast.fail(returnCode.message);
        }
        return put({
          type: 'customer/update',
          payload: {
            customerDetails: body,
          },
        });
      });
    },
    // 修改备注信息
    updateRemarkInfo({ payload }) {
      return csis_modifyExtCustRemarkInfo(payload);
    },
  },
};
