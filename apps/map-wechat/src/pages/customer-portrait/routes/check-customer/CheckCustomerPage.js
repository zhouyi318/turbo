/*
 * @Author: Zhou Yi
 * @Date: 2021-08-04 14:42:48
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-12 15:29:08
 */
import React, { Component } from 'react';
import { connect } from '@cmbc/apollo';
import { createForm } from 'rc-form';
import { corpId, userCheckAgentid } from '@/constants/constant';
import CheckCustomerView from './CheckCustomerView';

class CheckUserInfoPageWrapper extends Component {
  state = {};

  onRefreshVerifyCode = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/getGraphVerifyCode',
      payload: {},
      async: true,
    });
  };

  // 提交数据
  onSubmit = values => {
    const { taskId, userInfo, dispatch } = this.props;
    const { mobile, msgContent, userNo } = values;

    dispatch({
      type: 'global/commitUserCheckInfo',
      payload: {
        taskId,
        corpId,
        agentId: userCheckAgentid,
        userId: userInfo.userId,
        oaAccount: userNo.replace(/\s/g, ''),
        mobile: mobile.replace(/\s/g, ''),
        msgContent: msgContent.replace(/\s/g, ''),
      },
      async: true,
    });
  };

  render() {
    const { form, isShowVerifyCode, graphVerifyInfo, isOnSubmit } = this.props;
    return (
      <CheckCustomerView
        form={form}
        graphVerifyInfo={graphVerifyInfo}
        isShowVerifyCode={isShowVerifyCode}
        onRefreshVerifyCode={this.onRefreshVerifyCode}
        isOnSubmit={isOnSubmit}
        onSubmit={this.onSubmit}
      />
    );
  }
}

function mapStateToProps({ global, custInfo }) {
  return {
    ...global,
    ...custInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const CheckCustomerPage = createForm()(CheckUserInfoPageWrapper);

export default connect(mapStateToProps, mapDispatchToProps)(CheckCustomerPage);
