/*
 * @Author: mskj-zhouyi
 * @Date: 2023-02-16 14:26:01
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2023-02-28 22:19:53
 * @FilePath: /wework/apps/basic-item/mock/index.js
 * @Description: vant官网 - https://vant-contrib.gitee.io/vant/#/zh-CN/home
 */

// 请求菜单列表
const MenuList = {
  MSG: "交易成功",
  menuData: {
    menuList: [
      {
        menuDescribe: "资讯早报",
        menuUrl:
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww51ab38ddb9f7f60d&redirect_uri=https%3A%2F%2Fweworkdl.cmbc.com.cn%2Fmorning%2Fbuild%2Fh5%2Findex.html%23%2F%3FTOKEN%3Dww51ab38ddb9f7f60d&response_type=code&scope=snsapi_privateinfo&agentid=1000112&state=ww51ab38ddb9f7f60d#wechat_redirect",
        menuId: "qywx0000",
        whiteSwitch: "0",
        menuName: "发早报",
        menuImgUrl: "../common/assets/workbench/fzb.png",
        menuSort: 1,
      },
      {
        menuDescribe: "发产品",
        menuUrl: "sidebar/#/pages/productStore/index?source=workbench",
        menuId: "qywx001",
        whiteSwitch: "0",
        menuName: "发产品",
        menuImgUrl: "../common/assets/workbench/menuImg/fcp.png",
        menuSort: 3,
      },
      {
        menuDescribe: "客户雷达",
        menuUrl: "/pages/radar/index/index",
        menuId: "qywx0015",
        whiteSwitch: "0",
        menuName: "客户雷达",
        menuImgUrl: "../common/assets/workbench/menuImg/custRadar.png",
        menuSort: 7,
      },
      {
        menuDescribe: "工作提醒",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/remind_work",
        menuId: "qywx0018",
        whiteSwitch: "1",
        menuName: "工作提醒",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/icon_workRemind.png",
        menuSort: 20,
      },
      {
        menuDescribe: "发资讯",
        menuUrl: "sidebar/#/pages/sourceMaterial/index?index=0&active=0",
        menuId: "qywx002",
        whiteSwitch: "0",
        menuName: "发资讯",
        menuImgUrl: "../common/assets/workbench/menuImg/fzx.png",
        menuSort: 3,
      },
      {
        menuDescribe: "对公客户视图",
        menuUrl:
          "https://weworkdl.cmbc.com.cn/corporate-wechat/index.html#/welcome/home",
        menuId: "qywx0020",
        whiteSwitch: "1",
        menuName: "对公视图",
        menuImgUrl: "../common/assets/workbench/menuImg/dgst.png",
        menuSort: 5,
      },
      {
        menuDescribe: "数字员工",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/digital_employees",
        menuId: "qywx0022",
        whiteSwitch: "1",
        menuName: "数字员工",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/digitalEmployees.png",
        menuSort: 22,
      },
      {
        menuDescribe: "手动认证客户（管理员）",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/search_identity",
        menuId: "qywx0023",
        whiteSwitch: "1",
        menuName: "手动认证(超管)",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/customerIdentityAuth.png",
        menuSort: 23,
      },
      {
        menuDescribe: "客户互换调整",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/customer_exchange",
        menuId: "qywx0024",
        whiteSwitch: "1",
        menuName: "客户互换",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/custExchange.png",
        menuSort: 25,
      },
      {
        menuDescribe: "离职管理",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/staff_manage",
        menuId: "qywx0026",
        whiteSwitch: "1",
        menuName: "离职管理",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/delStaffManage.png",
        menuSort: 26,
      },
      {
        menuDescribe: "强制解除绑定关系",
        menuUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/webVersion/CUSTINFO/#/forcibly_unbind",
        menuId: "qywx0028",
        whiteSwitch: "1",
        menuName: "强制解绑",
        menuImgUrl:
          "https://mmaqw.cmbc.com.cn:8190/files/mmaqw/menuicon/forciblyUnbind.png",
        menuSort: 28,
      },
      {
        menuDescribe: "发海报",
        menuUrl: "sidebar/#/pages/sourceMaterial/index?index=1&active=1",
        menuId: "qywx003",
        whiteSwitch: "0",
        menuName: "发海报",
        menuImgUrl: "../common/assets/workbench/menuImg/fhb.png",
        menuSort: 4,
      },
      {
        menuDescribe: "BETA早报",
        menuUrl: "BETA",
        menuId: "qywx0030",
        whiteSwitch: "0",
        menuName: "财经早报",
        menuImgUrl: "../common/assets/workbench/menuImg/beta.png",
        menuSort: 2,
      },
      {
        menuDescribe: "我的任务",
        menuUrl: "/pages/myTask/index/index",
        menuId: "qywx004",
        whiteSwitch: "0",
        menuName: "我的任务",
        menuImgUrl: "../common/assets/workbench/menuImg/wdrw.png",
        menuSort: 13,
      },
      {
        menuDescribe: "企微客户",
        menuUrl: "/pages/contacts/contacts",
        menuId: "qywx005",
        whiteSwitch: "0",
        menuName: "企微客户",
        menuImgUrl: "../common/assets/workbench/menuImg/qwkh.png",
        menuSort: 5,
      },
      {
        menuDescribe: "流失客户",
        menuUrl: "/pages/drainClient/drainClient",
        menuId: "qywx006",
        whiteSwitch: "0",
        menuName: "流失客户",
        menuImgUrl: "../common/assets/workbench/menuImg/lskh.png",
        menuSort: 6,
      },
      {
        menuDescribe: "企微群聊",
        menuUrl: "/pages/customerGroupChat/customerGroupChat",
        menuId: "qywx007",
        whiteSwitch: "0",
        menuName: "企微群聊",
        menuImgUrl: "../common/assets/workbench/menuImg/qwql.png",
        menuSort: 11,
      },
      {
        menuDescribe: "一键拉群",
        menuUrl: "/pages/keyGroup/index/index",
        menuId: "qywx008",
        whiteSwitch: "0",
        menuName: "一键拉群",
        menuImgUrl: "../common/assets/workbench/menuImg/yjlq.png",
        menuSort: 10,
      },
      {
        menuDescribe: "待办事项",
        menuUrl: "/pages/backlog/backlog",
        menuId: "qywx009",
        whiteSwitch: "0",
        menuName: "待办事项",
        menuImgUrl: "../common/assets/workbench/menuImg/dbsx.png",
        menuSort: 14,
      },
      {
        menuDescribe: "朋友圈",
        menuUrl: "/pages/circleFriendsHistory/index/index",
        menuId: "qywx010",
        whiteSwitch: "0",
        menuName: "历史朋友圈",
        menuImgUrl: "../common/assets/workbench/menuImg/pyq.png",
        menuSort: 15,
      },
      {
        menuDescribe: "添加管户好友",
        menuUrl: "/pages/addFriend/typeList/typeList",
        menuId: "qywx011",
        whiteSwitch: "0",
        menuName: "添加管户好友",
        menuImgUrl: "../common/assets/workbench/menuImg/addFriend.png",
        menuSort: 7,
      },
      {
        menuDescribe: "员工身份信息",
        menuUrl: "/pages/identification/index",
        menuId: "qywx012",
        whiteSwitch: "0",
        menuName: "员工身份信息",
        menuImgUrl: "../common/assets/workbench/menuImg/identification.png",
        menuSort: 13,
      },
      {
        menuDescribe: "手动认证客户",
        menuUrl: "/pages/manualAuth/home/index",
        menuId: "qywx013",
        whiteSwitch: "0",
        menuName: "手动认证客户",
        menuImgUrl: "../common/assets/workbench/menuImg/auth.png",
        menuSort: 8,
      },
    ],
    total: 23,
  },
  STATUS: "1",
};

export default [
  {
    url: "/api/showMenuList",
    method: "post",
    response: MenuList,
  },
];
