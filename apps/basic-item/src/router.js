/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-03 16:01:24
 * @LastEditors: mskj-zhouyi
 * @LastEditTime: 2023-02-03 21:27:20
 * @FilePath: /turbo/apps/basic-item/src/router.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./view/home'),
        meta: {
            title: '民生工作室',
        },
    },
    {
        path: '/morning',
        name: 'morning',
        component: () => import('./view/morning'),
        meta: {
            title: '发早报',
        },
    },
    {
        path: '/produce',
        name: 'produce',
        component: () => import('./view/produce'),
        meta: {
            title: '发产品',
        },
    },
    {
        path: '/poster',
        name: 'poster',
        component: () => import('./view/poster'),
        meta: {
            title: '发海报',
        },
    },
    {
        path: '/information',
        name: 'information',
        component: () => import('./view/information'),
        meta: {
            title: '发资讯',
        },
    },
    {
        path: '/stock_customer',
        name: 'stock-customer',
        component: () => import('./view/stock-customer'),
        meta: {
            title: '我的客户',
        },
    },
    {
        path: '/lossing_customer',
        name: 'lossing-customer',
        component: () => import('./view/lossing-customer'),
        meta: {
            title: '流失客户',
        },
    },
    {
        path: '/customer_radar',
        name: 'customer-radar',
        component: () => import('./view/customer-radar'),
        meta: {
            title: '客户雷达',
        },
    },
    {
        path: '/add_friends',
        name: 'add-friends',
        component: () => import('./view/add-friends'),
        meta: {
            title: '添加管护好友',
        },
    },
    {
        path: '/customer_certification',
        name: 'customer-certification',
        component: () => import('./view/customer-certification'),
        meta: {
            title: '手动认证客户',
        },
    },
    {
        path: '/pull_group',
        name: 'pull-group',
        component: () => import('./view/pull-group'),
        meta: {
            title: '一键拉群',
        },
    },
    {
        path: '/group_chat',
        name: 'group-chat',
        component: () => import('./view/group-chat'),
        meta: {
            title: '企微群聊',
        },
    },
    {
        path: '/identity_authentication',
        name: 'identity-authentication',
        component: () => import('./view/identity-authentication'),
        meta: {
            title: '员工身份信息',
        },
    },
    {
        path: '/my_task',
        name: 'my-task',
        component: () => import('./view/my-task'),
        meta: {
            title: '我的任务',
        },
    },
    {
        path: '/backlog',
        name: 'backlog',
        component: () => import('./view/backlog'),
        meta: {
            title: '待办事项',
        },
    },
    {
        path: '/historical_friends',
        name: 'historical-friends',
        component: () => import('./view/historical-friends'),
        meta: {
            title: '历史朋友圈',
        },
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export { router };