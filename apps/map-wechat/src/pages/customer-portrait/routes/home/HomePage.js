/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-11 17:33:04
 */
import React, { Component } from 'react';
import { connect } from '@cmbc/apollo';
import { Loading } from '@/components';

class HomePage extends Component {
  render() {
    return <Loading />;
  }
}

function mapStateToProps() {
  return {
    ...global,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
