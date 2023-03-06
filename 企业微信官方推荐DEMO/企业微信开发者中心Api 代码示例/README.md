本项目旨在用一个最小应用的形式，帮助开发者了解企业微信自建应用开发的基本流程和概念，本项目代码示例包含企业微信开放平台常用 Api 的使用示例。

## 功能介绍

本项目基于 `Express` 与 `VueCli` 构建，主要用于向开发演示企业微信自建应用的常见开发场景，主要功能包括：

### 基本信息看板

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.45.33.24b8f6fad6.png" width="640"  max-width="640" />


### 网页授权登录

从企业微信工作台打开自建应用，通过 OAuth 获取登录用户基本信息，请参考开发教程 [如何获取登录用户信息](https://developer.work.weixin.qq.com/tutorial/detail/47)。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.45.45.7b372dc02b.png" width="640"  max-width="640" />

### 通讯录管理

拉取通讯录组织架构树，动态拉取各级目录下的成员和部门，并展示对应的详细信息，请参考开发教程 [管理企业通讯录](https://developer.work.weixin.qq.com/tutorial/detail/55)。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.46.21.2f4980cc82.png" width="640"  max-width="640" />

### 消息推送

使用应用消息接口，向成员、部门、标签发送消息，包括文本、图片、markdown、文件等消息类型，请参考 [发送应用消息](https://developer.work.weixin.qq.com/tutorial/detail/53)。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.46.35.add66b0605.png" width="640"  max-width="640" />


### 群机器人

通过机器人向群聊内发送文本、MarkDown、图片、文件等类型的消息，请参考开发教程 [开发企业微信群机器人](https://developer.work.weixin.qq.com/tutorial/detail/54)。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.47.23.f4551c0301.png" width="640"  max-width="640" />
<img src="https://wdoc-76491.picgzc.qpic.cn/MTY4ODg1MTQxODI4MzY5Mw_198582_zXhZF2GLuadX4nGY_1654086622?w=1280&h=1051.5985130111524" width="640"  max-width="640" />

### 使用手机扫码登录自建应用

在企业微信客户端之外，通过企业微信手机扫码快捷登录企业网站，请参考开发教程 [使用手机扫码登录自建应用](https://developer.work.weixin.qq.com/tutorial/detail/56)。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/202211111607.9a51bac7a4.png" width="640"  max-width="640" />

### 素材管理

使用素材管理接口，在使用对应素材前，预先上传图片、语音、视频、文件等类型的文件。

<img src="https://wwcdn.weixin.qq.com/node/wework/images/iShot_2022-11-10_15.47.06.f60847d398.png" width="640"  max-width="640" />

## 项目说明

### 一、目录说明

```bash
/configs
    - main.config.demo.js   # 项目配置信息 demo
/server
    - accesstoken.js        # 获取accesstoken的统一方法
    - contactController.js  # 与通讯录管理相关的接口逻辑
    - mediaController.js    # 与素材管理相关的接口逻辑 
    - messageController.js  # 与消息推送相关的接口逻辑
    - robotController.js    # 与机器人相关的接口逻辑
/vue                        # 前端项目开发目录
/scratch                    # 用于临时缓存 access_token 等数据
```

### 二、配置说明

`/configs/main.config.js` 包含了完整的项目配置数据，针对不同的功能需要不同的权限，在使用对用的功能前请先确认对应的权限信息。

## 使用示例代码

### 一、下载代码示例

打开命令行工具，执行以下命令，下载服务端代码。

```bash
git clone https://github.com/WecomTeam/InnerAppCodeSample.git
```

### 二、配置项目信息

打开下载的代码工程，在 `/configs` 目录将 `main.config.demo.js` 复制一份到 `main.config.js` 文件，并根据实际项目情况补充以下配置信息：

**提示：** 该文件配置的信息极其重要，切勿泄漏。

```javascript
{
    // 企业信息
    corp_id: "",    
    // 应用信息
    agent_id: "",
    app_secret:"",
    // 网站根目录 URL
    site_base:'http://myapp.com:3000',
    // 企业主页 URL，会自动跳转到 Oauth 授权的链接，并且重定向到 app_path
    home_path:'/home',
    // 授权后跳转 URL，会根据登录的状态展示信息
    app_path:'/app',    
    // 机器人 WebHook
    robot_webhook:''
}
```

### 三、安装项目依赖

在已下载的示例代码项目根目录下，执行以下代码完成依赖安装：
```bash
npm install 
```

### 四、构建前端工程

在已下载的示例代码项目根目录下，执行以下代码完成前端项目构建：
```bash
npm run build
```

### 五、启动服务

执行以下命令，启动后端服务

```bash
npm run start
```

### 六、访问服务

#### 准备工作
1. 修改本地host
    ```
    127.0.0.1 myapp.com
    ```

2. 配置可信域名

    因为使用了 Oauth 登录，所以需要配置对应的 可信域名，在应用的“企业微信授权登录”配置加上 `myapp.com:3000`

    > Express 默认使用 3000端口，开发者可以根据需要在 `bin/www` 中修改端口


#### 在浏览器中访问
在浏览器中访问 http://myapp.com:3000/app 检查服务是否启动成功。

> `main.config.js` 中的 `app_path` ，代表授权后跳转 URL，会根据登录的状态展示信息，不强制登录

#### 在企业微信工作台中访问

> `main.config.js` 中的 `home_path` ，代表企业主页 URL，会自动跳转到 Oauth 授权的链接，并且重定向到 `app_path`

将应用主页配置为 `http://myapp.com:3000/home`，从企业微信工作台打开自建应用。


### 七、特别提示
从 2022.6.20 起，新建的企业内部应用，须指定企业可信IP，方可调用相关的接口，请在企业应用详情页面配置本地 IP。

请参考[自建及代开发应用安全性升级](https://developer.work.weixin.qq.com/community/announcement/detail?content_id=16334603338859177543)。


## 更多教程
关于企业微信企业自建应用开发相关的内容，请参考企业微信官方教程 [开发企业自建应用](https://developer.work.weixin.qq.com/tutorial/detail/44)，关于企业微信开发更多的教程和指引，请查看 [官方开发教程](https://developer.work.weixin.qq.com/tutorial/)。

