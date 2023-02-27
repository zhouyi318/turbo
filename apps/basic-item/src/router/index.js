/*
 * @Author: 周毅
 * @Date: 2023-02-17 14:44:33
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 17:46:47
 * @FilePath: /wework/apps/basic-item/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import { useUserInfoStore } from "@/stores/login.js";
import { storage } from "utils";

const Layout = () => import("@/components/Layout/index.vue");
const Storage = new storage();

const routes = [
  {
    path: "/",
    redirect: "home",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "民生工作室",
          requireAuth: true,
        },
      },
      {
        path: "morning",
        name: "morning",
        component: () => import("@/views/morning/index.vue"),
        meta: {
          title: "发早报",
          requireAuth: true,
        },
      },
      {
        path: "produce",
        name: "produce",
        component: () => import("@/views/produce/index.vue"),
        meta: {
          title: "发产品",
          requireAuth: true,
        },
      },
      {
        path: "poster",
        name: "poster",
        component: () => import("@/views/poster/index.vue"),
        meta: {
          title: "发海报",
          requireAuth: true,
        },
      },
      {
        path: "information",
        name: "information",
        component: () => import("@/views/information/index.vue"),
        meta: {
          title: "发资讯",
          requireAuth: true,
        },
      },
      {
        path: "stock_customer",
        name: "stock-customer",
        component: () => import("@/views/stock-customer/index.vue"),
        meta: {
          title: "我的客户",
          requireAuth: true,
        },
      },
      {
        path: "lossing_customer",
        name: "lossing-customer",
        component: () => import("@/views/lossing-customer/index.vue"),
        meta: {
          title: "流失客户",
          requireAuth: true,
        },
      },
      {
        path: "customer_radar",
        name: "customer-radar",
        component: () => import("@/views/customer-radar/index.vue"),
        meta: {
          title: "客户雷达",
          requireAuth: true,
        },
      },
      {
        path: "add_friends",
        name: "add-friends",
        component: () => import("@/views/add-friends/index.vue"),
        meta: {
          title: "添加管护好友",
          requireAuth: true,
        },
      },
      {
        path: "customer_certification",
        name: "customer-certification",
        component: () => import("@/views/customer-certification/index.vue"),
        meta: {
          title: "手动认证客户",
          requireAuth: true,
        },
      },
      {
        path: "pull_group",
        name: "pull-group",
        component: () => import("@/views/pull-group/index.vue"),
        meta: {
          title: "一键拉群",
          requireAuth: true,
        },
      },
      {
        path: "group_chat",
        name: "group-chat",
        component: () => import("@/views/group-chat/index.vue"),
        meta: {
          title: "企微群聊",
          requireAuth: true,
        },
      },
      {
        path: "identity_authentication",
        name: "identity-authentication",
        component: () => import("@/views/identity-authentication/index.vue"),
        meta: {
          title: "员工身份信息",
          requireAuth: true,
        },
      },
      {
        path: "my_task",
        name: "my-task",
        component: () => import("@/views/my-task/index.vue"),
        meta: {
          title: "我的任务",
          requireAuth: true,
        },
      },
      {
        path: "backlog",
        name: "backlog",
        component: () => import("@/views/backlog/index.vue"),
        meta: {
          title: "待办事项",
          requireAuth: true,
        },
      },
      {
        path: "historical_friends",
        name: "historical-friends",
        component: () => import("@/views/historical-friends/index.vue"),
        meta: {
          title: "历史朋友圈",
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/check",
    name: "check",
    component: () => import("@/views/check/index.vue"),
    meta: {
      title: "身份认证",
      hidden: true,
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

// 创建路由实例
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

// 路由守护
router.beforeEach((to, from) => {
  // 修改title
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }

  // 判断是否需要登录权限
  if (to.matched.some((res) => res.meta.requireAuth)) {
    const store = useUserInfoStore();
    const userInfo = JSON.stringify(store.userInfo);

    // 保存进入路由
    if (userInfo === "{}" && to.fullPath.indexOf("mcpCode") === -1) {
      Storage.set("wework_redirect", to.fullPath);
    }

    if (userInfo === "{}" && to.name !== "login") {
      return {
        path: "/login",
      };
    }
  }
});
