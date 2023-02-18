/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:37:13
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 13:38:52
 */
import React, { Component } from 'react';
import { connect } from 'apollo';
import {
  oAouthUrl,
  codeUrl,
  agentId,
  appId,
  corpId,
  pageSign,
  scope,
  responseType,
} from '@/constants/constant';
import { urlParse } from '@/utils';
import { Toast } from 'antd-mobile';
import { routerRedux } from '@cmbc/apollo/router';
import { qywxLogin, queryWxConfigInfo } from '@/services/query';
import '@/utils/flexible';
import ErrorBoundary from './ErrorPage';

import style from './styles.less';

const redirectUri = encodeURIComponent(
  `${codeUrl}?agentid=${agentId}&pageSign=${pageSign}&encrypType=1&corpid=${corpId}`,
);
const oAouthRedirectUrl = `${oAouthUrl}?appid=${appId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}#wechat_redirect`;

class LayoutPage extends Component {
  componentDidMount() {
    const { supplementary, userInfo } = this.props;
    const { mcpCode, ...restProps } = urlParse(window.location.href);

    // 是否需要联合登录
    if (!(mcpCode || supplementary)) {
      window.location.href = oAouthRedirectUrl;
    }

    // 获取用户信息
    if (mcpCode && !userInfo) {
      this.getUserInfo(mcpCode, restProps);
    }
  }

  // 进入详情页
  intoCustomerDetails = async (userId, entry) => {
    const { dispatch } = this.props;
    if (entry === 'group') {
      await dispatch({
        type: 'customer/update',
        payload: {
          isGroup: true,
        },
      });
    } else {
      await dispatch({
        type: 'customer/update',
        payload: {
          external_userid: userId,
        },
      });
    }

    // 进入客户试图页面
    return dispatch(
      routerRedux.push({
        pathname: '/custInfo/show',
      }),
    );
  };

  // 获取用户信息
  getUserInfo = async (mcpCode, restProps) => {
    const { dispatch } = this.props;
    const that = this;
    const indexUrl = window.location.href.split('#')[0];

    const data = await qywxLogin({
      mcpCode,
      ...restProps,
    });

    if (data.returnCode.type !== 'S') {
      return Toast.fail(data.returnCode.message);
    }

    // 进行二次认证
    if (data.errcode === 'WXE0003') {
      await dispatch({
        type: 'global/update',
        payload: {
          supplementary: true,
          userInfo: data.userInfo,
        },
      });

      return dispatch(
        routerRedux.push({
          pathname: '/custInfo/check',
        }),
      );
    }

    // 存储用户信息
    await dispatch({
      type: 'global/update',
      payload: {
        userInfo: data.userInfo,
      },
    });

    // 获取微信 config 参数
    const wxConfigData = await queryWxConfigInfo({
      agentId,
      corpId,
      indexUrl,
    });

    if (wxConfigData.returnCode.type !== 'S') {
      return Toast.fail(wxConfigData.returnCode.message);
    }

    window.wx.config({
      beta: true,
      debug: false,
      appId: corpId,
      timestamp: wxConfigData.configInfo.timestamp,
      nonceStr: wxConfigData.configInfo.nonceStr,
      signature: wxConfigData.configInfo.signatureConfig,
      jsApiList: ['invoke'],
    });

    window.wx.ready(function () {
      window.wx.agentConfig({
        corpid: corpId,
        agentid: agentId,
        timestamp: wxConfigData.configInfo.timestamp,
        nonceStr: wxConfigData.configInfo.nonceStr,
        signature: wxConfigData.configInfo.signatureAgentConfig,
        jsApiList: ['getContext', 'getCurExternalContact'],
        success() {
          window.wx.invoke('getContext', {}, res => {
            console.log('当前运行环境', res);
            if (res.err_msg === 'getContext:ok') {
              // 入口环境
              const entry = res.entry;
              if (entry !== 'group_chat_tools') {
                window.wx.invoke('getCurExternalContact', {}, _res => {
                  if (_res.err_msg === 'getCurExternalContact:ok') {
                    console.log('外部联系人userId', _res.userId);
                    that.intoCustomerDetails(_res.userId);
                  } else {
                    Toast.fail('请申请开通客户联系功能权限', 4);
                  }
                });
              } else {
                that.intoCustomerDetails(null, 'group');
              }
            } else {
              //错误处理
              Toast.fail('无法检测当前运行环境！');
            }
          });
        },
        fail(res) {
          if (res.errMsg.indexOf('function not exist') > -1) {
            return Toast.fail('企业微信版本过低请升级');
          }
          return Toast.fail(res.errMsg);
        },
      });
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div className={style.layout}>
        {/* <HoverButton /> */}
        <ErrorBoundary {...this.props}>{children}</ErrorBoundary>
      </div>
    );
  }
}

function mapStateToProps({ global }) {
  return {
    ...global,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);
