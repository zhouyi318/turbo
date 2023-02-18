/*
 * @Author: Zhou Yi
 * @Date: 2021-08-11 17:11:44
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 22:58:28
 */
import React, { Component } from 'react';
import { connect } from '@cmbc/apollo';
import { Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { agentId, corpId } from '@/constants/constant';
import CustomerInfoView from './CustomerInfoView';
import noInfo from 'public/photo_buzhichi.png';
import styles from './CustomerInfoView.less';

const prefixCls = 'noDataStyle';
class CustomerInfoPageWrapper extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.getExternalContactDetail();
  }

  getExternalContactDetail = () => {
    const { external_userid, isGroup, dispatch } = this.props;
    !isGroup &&
      dispatch({
        type: 'customer/getExternalContactDetail',
        payload: {
          params: {
            agentid: agentId,
            corpid: corpId,
            external_userid,
          },
        },
        async: true,
      });
  };

  onSave = values => {
    const { userInfo, external_userid, dispatch } = this.props;
    dispatch({
      type: 'customer/updateRemarkInfo',
      payload: {
        params: {
          agentid: agentId,
          corpid: corpId,
          external_userid,
          userid: userInfo.userId,
          remark: values.remark,
          remark_mobiles: values.remark_mobiles,
          description: values.description,
        },
      },
      async: true,
    })
      .then(({ returnCode }) => {
        if (returnCode.type !== 'S') {
          return Toast.fail(returnCode.message);
        }
        return Toast.success('用户备注信息更新成功!', 1.5, () => {
          this.setState({ open: false });
          return this.getExternalContactDetail();
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { form, isGroup, customerDetails } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        {isGroup ? (
          <div className={styles[prefixCls]}>
            <div className={styles[`${prefixCls}-main`]}>
              <img src={noInfo} alt='不支持群信息' />
              <p>当前功能不支持群使用</p>
              <p>请选择单个用户</p>
            </div>
          </div>
        ) : (
          <CustomerInfoView
            form={form}
            data={customerDetails}
            isOpen={open}
            onOpenChange={() => this.setState({ open: !open })}
            onSave={this.onSave}
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ global, customer }) {
  return {
    ...global,
    ...customer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const CustomerInfoPage = createForm()(CustomerInfoPageWrapper);

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfoPage);
