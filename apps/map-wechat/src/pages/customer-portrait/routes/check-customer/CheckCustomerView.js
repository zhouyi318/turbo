/*
 * @Author: Zhou Yi
 * @Date: 2021-08-04 14:42:55
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 11:42:30
 */
import React, { useState, useEffect } from 'react';
import { InputItem, Button, Toast } from 'antd-mobile';
import { SMSVerifyCode } from '@/components';
import logo from 'public/mingsheng_logo.png';
import styles from './CheckCustomerView.less';

const prefixCls = 'check-user-info';

function CheckCustomerView(props) {
  const {
    form,
    graphVerifyInfo,
    isShowVerifyCode,
    onRefreshVerifyCode,
    isOnSubmit,
    onSubmit,
  } = props;
  const { getFieldProps, validateFields } = form;
  const [userNoValue, setUserNoValue] = useState(null);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [phoneValue, setPhoneValue] = useState(null);
  const [SMSVerifyCodeValue, setSMSVerifyCodeValue] = useState(null);
  const [isVerifyCodeError, setIsVerifyCodeError] = useState(false);
  const [verifyCodeValue, setVerifyCodeValue] = useState(null);

  useEffect(() => {
    setIsVerifyCodeError(true);
  }, [graphVerifyInfo.verifyCode]);

  const onPhoneErrorClick = () => {
    if (isPhoneError) {
      Toast.info('请输入正确的手机号！');
    }
  };

  const onClick = () => {
    validateFields((error, value) => {
      if (!error && isOnSubmit) {
        onSubmit(value);
      }
    });
  };

  const codePng = graphVerifyInfo.securityCode
    ? `data:image/png;base64,${graphVerifyInfo.securityCode}`
    : '';
  const isSMSVerifyCode = !isPhoneError && phoneValue && userNoValue;
  const isDisabled = () => {
    let disabled = true;
    if (!isPhoneError) {
      if (isShowVerifyCode) {
        disabled = !(
          userNoValue &&
          phoneValue &&
          verifyCodeValue &&
          SMSVerifyCodeValue &&
          !isVerifyCodeError
        );
      } else {
        disabled = !(userNoValue && phoneValue && SMSVerifyCodeValue);
      }
    }
    return disabled;
  };
  return (
    <div className={styles[prefixCls]}>
      <div className={styles[`${prefixCls}-header`]}>
        <div>补充信息完成身份认证</div>
        <div>您的企业微信登录账号信息不完整，需先进行身份认证</div>
      </div>

      <div className={styles[`${prefixCls}-main`]}>
        <InputItem
          {...getFieldProps('userNo', {
            rules: [{ required: true, message: '请输入员工OA账号!' }],
            onChange(value) {
              setUserNoValue(value);
            },
          })}
          labelNumber={3}
          placeholder='请输入员工OA账号'
          value={userNoValue}
        >
          OA号
        </InputItem>

        <InputItem
          {...getFieldProps('mobile', {
            rules: [{ required: true, message: '请输入员工OA手机号!' }],
            onChange(value) {
              const phone = value.replace(/\s/g, '');
              setIsPhoneError(!/^[1]([3-9])[0-9]{9}$/.test(Number(phone)));
              setPhoneValue(value);
            },
          })}
          type='phone'
          labelNumber={3}
          placeholder='请输入员工OA手机号'
          value={phoneValue}
          error={isPhoneError}
          onErrorClick={onPhoneErrorClick}
        >
          手机号
        </InputItem>

        {isShowVerifyCode && (
          <InputItem
            {...getFieldProps('verifyCode', {
              rules: [{ required: true, message: '请输入图形码!' }],
              onChange: value => {
                const verifyCode = value.replace(/\s/g, '');
                const verifyStatus = graphVerifyInfo.verifyCode ? graphVerifyInfo.verifyCode : '';
                setVerifyCodeValue(verifyCode);
                setIsVerifyCodeError(verifyStatus !== verifyCode.toUpperCase());
              },
            })}
            value={verifyCodeValue}
            error={isVerifyCodeError}
            labelNumber={3}
            placeholder='请输入图形码'
            extra={
              <span role='button' tabIndex={0} onClick={onRefreshVerifyCode}>
                <img style={{ width: '100PX' }} src={codePng} alt='图形验证码' />
              </span>
            }
          >
            图形码
          </InputItem>
        )}

        <SMSVerifyCode
          isLimit
          userNo={userNoValue}
          mobile={phoneValue}
          disabled={isSMSVerifyCode}
          value={SMSVerifyCodeValue}
          {...getFieldProps('msgContent', {
            rules: [{ required: true, message: '请输入验证码!' }],
            onChange: value => {
              setSMSVerifyCodeValue(value);
            },
          })}
        />

        <Button
          className={styles[`${prefixCls}-main-btn`]}
          type='primary'
          disabled={isDisabled()}
          onClick={onClick}
        >
          确定
        </Button>
      </div>

      <div className={styles[`${prefixCls}-footer`]}>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
}

export default CheckCustomerView;
