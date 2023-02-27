/*
 * @Author: 周毅
 * @Date: 2023-02-27 19:20:54
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 19:48:33
 * @FilePath: /wework/packages/utils/mockWxUtils.js
 */
function mockWxUtils(apiList) {
  const wxJsSDK = {}
  wxJsSDK.config = function (props) {
    console.log("$wx.config 调用成功！")
  };

  wxJsSDK.ready = function (callback) {
    console.log("$wx.ready 调用成功！")
    return callback()
  };

  wxJsSDK.agentConfig = function (callback) {
    console.log("$wx.agentConfig 调用成功！")
    return callback.success()
  };

  wxJsSDK.invoke = function (api, params, callback) {
    console.log(`API名称-${api}`, `入参-${JSON.stringify(params)}`);

    // 模拟 - 获取进入H5页面的入口环境
    if (api === 'getContext') {
      return callback({
        //返回进入H5页面的入口类型，目前有normal、contact_profile、single_chat_tools、group_chat_tools、chat_attachment
        err_msg: "getContext:ok",
        entry: "normal",
      })
    }
  };


  return wxJsSDK;
}

export default mockWxUtils