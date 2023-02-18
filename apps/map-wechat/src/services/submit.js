/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:25:06
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 11:50:17
 */
/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export const commitUserExtInfo = params => request('commitUserExtInfoService', params, true);
