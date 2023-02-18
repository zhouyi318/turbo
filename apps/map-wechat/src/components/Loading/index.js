/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:29:43
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 22:36:52
 */
import React from 'react';
import './styles.less';

export default function Loading() {
  return (
    <div className='loading'>
      <div className='loading-main'>
        <div className='loading-main-title'>加载中...</div>
        <div className='loading-main-animation'>
          <div>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
