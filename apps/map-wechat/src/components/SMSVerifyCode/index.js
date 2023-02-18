/* eslint-disable import/no-unresolved */
/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:30:39
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 10:37:12
 */
import React, { useState } from 'react';
import { connect } from '@cmbc/apollo';
import { InputItem, Toast } from 'antd-mobile';
import { msgCodeSendByMobileNew } from '@/services/query';
import { Storage } from '@/utils';
import './styles.less';

const prefixCls = 'SMSVerifyCode';
const storage = new Storage();

const SMSVerifyCode = React.forwardRef((props, ref) => {
  const {
    value,
    userNo,
    mobile,
    disabled,
    isLimit = false,
    limitNumber = 3,
    limitTime = 10,
    onChange,
  } = props;
  const [SMSVerifyName, setSMSVerifyName] = useState('获取验证码');
  const [preventDoubleClick, setPreventDoubleClick] = useState(true);

  const onSMSVerifyCode = () => {
    if (isLimit) {
      const preCount = storage.get('KHST_SMSVerifyCode') || 0;
      const curCount = Number(preCount) + 1;
      storage.set('KHST_SMSVerifyCode', curCount, limitTime);
      if (curCount > limitNumber) {
        return Toast.info('获取短信次数过多，请稍后重试！');
      }
    }

    setPreventDoubleClick(false);

    let seconds = 60;
    const promise = new Promise(resolve => {
      const timer = setInterval(() => {
        seconds -= 1;
        setSMSVerifyName(seconds);
        if (seconds <= 0) {
          resolve(timer);
        }
      }, 1000);
    });

    return msgCodeSendByMobileNew({
      userSN: userNo,
      mobile: mobile.replace(/\s/g, ''),
      spName: '85006', // 测试期间使用
      data: 'FIELD0|企业微信授权|FIELD1|登录', // 测试期间使用
      transIdExpandParams: {
        appId: '459',
      }, // 测试期间暂时可以写 459
    }).then(({ TASKID, returnCode }) => {
      promise
        .then(timer => {
          clearInterval(timer);
          seconds = 60;
          setSMSVerifyName('获取验证码');
          return setPreventDoubleClick(true);
        })
        .catch(error => {
          console.log(error);
        });

      if (returnCode.type !== 'S') {
        return Toast.fail(returnCode.message);
      }

      Toast.success('短信验证码已发送...');

      return props.dispatch({
        type: 'global/update',
        payload: {
          taskId: TASKID,
        },
      });
    });
  };

  return (
    <InputItem
      ref={ref}
      type='number'
      labelNumber={3}
      placeholder='请输入验证码'
      value={value}
      extra={
        <div
          className={`${prefixCls}-${disabled ? 'yes' : 'no'}`}
          role='button'
          tabIndex={0}
          onClick={preventDoubleClick && disabled ? onSMSVerifyCode : undefined}
        >
          {SMSVerifyName}
        </div>
      }
      onChange={onChange}
    >
      验证码
    </InputItem>
  );
});

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

export default connect(mapStateToProps, mapDispatchToProps)(SMSVerifyCode);
