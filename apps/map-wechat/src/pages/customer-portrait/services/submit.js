/*
 * @Author: Zhou Yi
 * @Date: 2021-08-11 20:35:08
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 11:50:39
 */
/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export const csis_modifyExtCustRemarkInfo = params =>
  request('csis_modifyExtCustRemarkInfoService', params, true);
