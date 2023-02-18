/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 11:50:09
 */
/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export const qywxLogin = params => request('qywxLoginService', params);

export const queryWxConfigInfo = params => request('queryWxConfigInfoService', params);

export const querySecurityCode = params => request('securityCodeService', params, true);

export const msgCodeSendByMobileNew = params =>
  request('msgCodeSendByMobileNewService', params, true);
