/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-10 15:03:30
 * @FilePath: /wework/apps/basic-item/mock/home.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */

// 请求菜单列表
const MenuList = {
  MSG: "交易成功",
  menuData: {
    menuList: [
      {
        menuDescribe: "资讯早报",
        menuUrl: "/morning",
        menuId: "qywx0000",
        whiteSwitch: "0",
        menuName: "发早报",
        menuImgUrl: "certification_menu.png",
        menuSort: 1,
      },
      {
        menuDescribe: "发产品",
        menuUrl: "/produce",
        menuId: "qywx001",
        whiteSwitch: "0",
        menuName: "发产品",
        menuImgUrl: "friends_menu.png",
        menuSort: 3,
      },
      {
        menuDescribe: "客户雷达",
        menuUrl: "/customer_radar",
        menuId: "qywx0015",
        whiteSwitch: "0",
        menuName: "客户雷达",
        menuImgUrl: "group_menu.png",
        menuSort: 7,
      },
      {
        menuDescribe: "工作提醒",
        menuUrl: "/customer_radar",
        menuId: "qywx0018",
        whiteSwitch: "1",
        menuName: "工作提醒",
        menuImgUrl: "todo_menu.png",
        menuSort: 20,
      },
      {
        menuDescribe: "发资讯",
        menuUrl: "/information",
        menuId: "qywx002",
        whiteSwitch: "0",
        menuName: "发资讯",
        menuImgUrl: "certification_menu.png",
        menuSort: 3,
      },
      {
        menuDescribe: "对公客户视图",
        menuUrl: "/information",
        menuId: "qywx0020",
        whiteSwitch: "1",
        menuName: "对公视图",
        menuImgUrl: "certification_menu.png",
        menuSort: 5,
      },
      {
        menuDescribe: "发海报",
        menuUrl: "/poster",
        menuId: "qywx003",
        whiteSwitch: "0",
        menuName: "发海报",
        menuImgUrl: "friends_menu.png",
        menuSort: 4,
      },
      {
        menuDescribe: "BETA早报",
        menuUrl: "/BETA",
        menuId: "qywx0030",
        whiteSwitch: "0",
        menuName: "财经早报",
        menuImgUrl: "todo_menu.png",
        menuSort: 2,
      },
      {
        menuDescribe: "我的任务",
        menuUrl: "/my_task",
        menuId: "qywx004",
        whiteSwitch: "0",
        menuName: "我的任务",
        menuImgUrl: "certification_menu.png",
        menuSort: 13,
      },
      {
        menuDescribe: "企微客户",
        menuUrl: "/pages/contacts/contacts",
        menuId: "qywx005",
        whiteSwitch: "0",
        menuName: "企微客户",
        menuImgUrl: "certification_menu.png",
        menuSort: 5,
      },
      {
        menuDescribe: "流失客户",
        menuUrl: "/pages/drainClient/drainClient",
        menuId: "qywx006",
        whiteSwitch: "0",
        menuName: "流失客户",
        menuImgUrl: "certification_menu.png",
        menuSort: 6,
      },
      {
        menuDescribe: "企微群聊",
        menuUrl: "/pages/customerGroupChat/customerGroupChat",
        menuId: "qywx007",
        whiteSwitch: "0",
        menuName: "企微群聊",
        menuImgUrl: "certification_menu.png",
        menuSort: 11,
      },
      {
        menuDescribe: "一键拉群",
        menuUrl: "/pages/keyGroup/index/index",
        menuId: "qywx008",
        whiteSwitch: "0",
        menuName: "一键拉群",
        menuImgUrl: "certification_menu.png",
        menuSort: 10,
      },
      {
        menuDescribe: "待办事项",
        menuUrl: "/pages/backlog/backlog",
        menuId: "qywx009",
        whiteSwitch: "0",
        menuName: "待办事项",
        menuImgUrl: "todo_menu.png",
        menuSort: 14,
      },
      {
        menuDescribe: "朋友圈",
        menuUrl: "/pages/circleFriendsHistory/index/index",
        menuId: "qywx010",
        whiteSwitch: "0",
        menuName: "历史朋友圈",
        menuImgUrl: "todo_menu.png",
        menuSort: 15,
      },
      {
        menuDescribe: "添加管户好友",
        menuUrl: "/pages/addFriend/typeList/typeList",
        menuId: "qywx011",
        whiteSwitch: "0",
        menuName: "添加管户好友",
        menuImgUrl: "todo_menu.png",
        menuSort: 7,
      },
      {
        menuDescribe: "员工身份信息",
        menuUrl: "/pages/identification/index",
        menuId: "qywx012",
        whiteSwitch: "0",
        menuName: "员工身份信息",
        menuImgUrl: "todo_menu.png",
        menuSort: 13,
      },
      {
        menuDescribe: "手动认证客户",
        menuUrl: "/pages/manualAuth/home/index",
        menuId: "qywx013",
        whiteSwitch: "0",
        menuName: "手动认证客户",
        menuImgUrl: "todo_menu.png",
        menuSort: 8,
      },
    ],
    total: 20,
  },
  STATUS: "1",
};

const cardList = {
  MSG: "交易成功",
  cardData: {
    cardList: [
      {
        cardName: "生活早报",
        cardId: "000001",
        componentName: "MorningCard",
        cardSort: 0,
      },
      {
        cardName: "客户雷达",
        cardId: "000002",
        componentName: "RadarCard",
        cardSort: 1,
      },
      {
        cardName: "企微好友",
        cardId: "000003",
        componentName: "ClientCard",
        cardSort: 2,
      },
      {
        cardName: "代办任务",
        cardId: "000004",
        componentName: "TodoCard",
        cardSort: 2,
      },
    ],
    total: 3,
  },
  STATUS: "1",
};

const myDesk = {
  MSG: "交易成功",
  WECHAT_ADD_TODAY: 0,
  STATUS: "1",
  INVERSION_RATE: "0%",
  CUST_TO_BE_ADDED: 0,
  WECHAT_ALL_NUM: 19,
  WECHAT_LOSS_TODAY: 0,
  TASK_TO_DO: 0,
  TODAY_TO_DO: 0,
  BUSI_FOLLOW_UP: 0,
  CUST_ADDED_WECHAT: "0",
};

export default [
  {
    url: "/api/showMenuList",
    method: "post",
    response: MenuList,
  },
  {
    url: "/api/getCardList",
    method: "post",
    response: cardList,
  },
  {
    url: "/api/getMyDesk",
    method: "post",
    response: myDesk,
  },
];
