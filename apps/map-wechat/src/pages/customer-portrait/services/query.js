/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 16:47:07
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 12:01:02
 */
/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export const queryExtCustDetailInfo = params =>
  request('csis_queryExtCustDetailInfoService', params);
