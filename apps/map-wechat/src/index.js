/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 15:54:26
 */
import Apollo from '@cmbc/apollo';
import { createHashHistory } from '@cmbc/apollo/router';
import router from './router/router';
import './index.less';

const app = Apollo({
  history: createHashHistory(),
});

app.model(require('./models/global'));

app.router(router);

app.start('#root');

export default app;
