/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 16:41:40
 */
import React from 'react';
import { Router, Switch, Route } from '@cmbc/apollo/router';
import { BasicLayout } from '@/components';
import CustomerPortrait from '@/pages/customer-portrait';

function AppRouter(props) {
  const { app, history } = props;

  return (
    <Router history={history}>
      <BasicLayout>
        <Switch>
          <Route path='/custInfo' component={CustomerPortrait(app)} />
        </Switch>
      </BasicLayout>
    </Router>
  );
}

export default AppRouter;
