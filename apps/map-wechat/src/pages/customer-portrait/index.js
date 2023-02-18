/*
 * @Author: Zhou Yi
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 16:23:37
 */
import { dynamic } from '@cmbc/apollo';

export default app =>
  dynamic({
    app,
    models: () => [import('./models/customer')],
    component: () => import('./route'),
  });
