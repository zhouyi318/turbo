import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue"),
    meta: {
      title: "民生工作室",
    },
  },
  {
    path: "/morning",
    name: "morning",
    component: () => import("../views/morning/index.vue"),
    meta: {
      title: "发早报",
    },
  },
  {
    path: "/produce",
    name: "produce",
    component: () => import("../views/produce/index.vue"),
    meta: {
      title: "发产品",
    },
  },
  {
    path: "/poster",
    name: "poster",
    component: () => import("../views/poster/index.vue"),
    meta: {
      title: "发海报",
    },
  },
  {
    path: "/information",
    name: "information",
    component: () => import("../views/information/index.vue"),
    meta: {
      title: "发资讯",
    },
  },
  {
    path: "/stock_customer",
    name: "stock-customer",
    component: () => import("../views/stock-customer/index.vue"),
    meta: {
      title: "我的客户",
    },
  },
  {
    path: "/lossing_customer",
    name: "lossing-customer",
    component: () => import("../views/lossing-customer/index.vue"),
    meta: {
      title: "流失客户",
    },
  },
  {
    path: "/customer_radar",
    name: "customer-radar",
    component: () => import("../views/customer-radar/index.vue"),
    meta: {
      title: "客户雷达",
    },
  },
  {
    path: "/add_friends",
    name: "add-friends",
    component: () => import("../views/add-friends/index.vue"),
    meta: {
      title: "添加管护好友",
    },
  },
  {
    path: "/customer_certification",
    name: "customer-certification",
    component: () => import("../views/customer-certification/index.vue"),
    meta: {
      title: "手动认证客户",
    },
  },
  {
    path: "/pull_group",
    name: "pull-group",
    component: () => import("../views/pull-group/index.vue"),
    meta: {
      title: "一键拉群",
    },
  },
  {
    path: "/group_chat",
    name: "group-chat",
    component: () => import("../views/group-chat/index.vue"),
    meta: {
      title: "企微群聊",
    },
  },
  {
    path: "/identity_authentication",
    name: "identity-authentication",
    component: () => import("../views/identity-authentication/index.vue"),
    meta: {
      title: "员工身份信息",
    },
  },
  {
    path: "/my_task",
    name: "my-task",
    component: () => import("../views/my-task/index.vue"),
    meta: {
      title: "我的任务",
    },
  },
  {
    path: "/backlog",
    name: "backlog",
    component: () => import("../views/backlog/index.vue"),
    meta: {
      title: "待办事项",
    },
  },
  {
    path: "/historical_friends",
    name: "historical-friends",
    component: () => import("../views/historical-friends/index.vue"),
    meta: {
      title: "历史朋友圈",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
