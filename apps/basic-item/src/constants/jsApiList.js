/*
 * @Author: 周毅
 * @Date: 2023-02-22 18:15:52
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 19:12:52
 * @FilePath: /wework/apps/basic-item/src/constants/global.js
 */
// 用于本地模拟用户登录
export const jsApiList = [
  "getContext",// 获取进入H5页面的入口环境

  /***************** 企业通讯录相关 **********************/
  "selectEnterpriseContact", // 选人接口
  "selectCorpGroupContact", // 企业互联/上下游选人接口
  "claimClassAdmin", // 认领老师班级
  "getCurCorpGroupContact", // 获取当前上下游联系人userid

  /***************** 会话操作相关 **********************/
  "openEnterpriseChat", // 打开会话
  "updateEnterpriseChat", // 变更群成员
  "openExistedChatWithMsg", // 打开已有群聊并发送消息
  "hideChatAttachmentMenu", // 隐藏聊天附件栏的发送按钮
  "setShareAttr", // 私密消息
  "createCorpGroupChat", // 创建企业互联/上下游会话
  "updateCorpGroupChat", // 变更企业互联/上下游群成员

  /***************** 界面操作相关 **********************/
  "openAppManage", // 打开应用管理页面

  /***************** 界面操作相关 **********************/
  "onMenuShareAppMessage", // 分享接口
  "onMenuShareWechat", // 获取“微信”按钮点击状态及自定义分享内容接口
  "onMenuShareTimeline", // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  "shareAppMessage", // 自定义转发到会话
  "shareWechatMessage", // 自定义转发到微信
  "onHistoryBack", // 监听页面返回事件
  "hideOptionMenu", // 隐藏右上角菜单接口
  "showOptionMenu", //显示右上角菜单接口
  "closeWindow", // 关闭当前网页窗口接口
  "hideMenuItems", // 批量隐藏功能按钮接口
  "showMenuItems", // 批量显示功能按钮接口
  "hideAllNonBaseMenuItem", // 隐藏所有非基础按钮接口
  "showAllNonBaseMenuItem", // 显示所有功能按钮接口
  "openDefaultBrowser", // 打开系统默认浏览器
  "onUserCaptureScreen", // 用户截屏事件
  "enterpriseVerify", // 快速跳转到认证界面
  "launchMiniprogram", // 跳转到小程序
  "setKeepScreenOn", // 保持屏幕常亮

  /***************** 媒体相关 **********************/
  "getLocalImgData", // 图像接口
  "chooseImage", // 拍照或从手机相册中选图接口
  "previewImage", // 预览图片接口
  "uploadImage", // 上传图片接口
  "downloadImage", // 下载图片接口
  "startRecord", // 开始录音接口
  "stopRecord", // 停止录音接口
  "onVoiceRecordEnd", // 监听录音自动停止接口
  "playVoice", // 播放语音接口
  "pauseVoice", // 暂停播放接口
  "stopVoice", // 停止播放接口
  "onVoicePlayEnd", // 监听语音播放完毕接口
  "uploadVoice", // 上传语音接口
  "downloadVoice", // 下载语音接口
  "translateVoice", // 语音转文字接口

  /***************** 客户联系相关 **********************/
  "selectExternalContact", // 外部联系人选人接口
  "openUserProfile", // 打开个人信息页接口
  "getCurExternalContact", // 获取当前外部联系人userid
  "getCurExternalChat", // 获取当前客户群的群ID
  "sendChatMessage", // 分享消息到当前会话
  "shareToExternalContact", // 群发消息给客户
  "shareToExternalChat", // 群发消息到客户群
  "navigateToAddCustomer", // 进入添加客户界面
  "shareToExternalMoments", // 发表内容到客户朋友圈
  "updateMomentsSetting", // 设置朋友圈封面与签名
];