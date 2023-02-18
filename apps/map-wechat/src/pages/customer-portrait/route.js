/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-11 17:17:58
 */
import React from 'react';
import { Route } from '@cmbc/apollo/router';
import Home from './routes/home/HomePage';
import CheckCustomer from './routes/check-customer/CheckCustomerPage';
import CustomerInfo from './routes/customer-info/CustomerInfoPage';

function routes() {
  return (
    <React.Fragment>
      <Route exact path='/custInfo/home' component={Home} />
      <Route exact path='/custInfo/check' component={CheckCustomer} />
      <Route exact path='/custInfo/show' component={CustomerInfo} />
    </React.Fragment>
  );
}

export default routes;
