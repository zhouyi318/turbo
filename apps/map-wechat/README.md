## Apollo template app

### 使用
测试： npm test                    - 执行 test 目录下的所有单元测试用例
开发： npm start                   - 启动项目
打包： npm run build               - 打最终压缩的生产包，包括最终的包分析
打包： npm run build-debug         - 打出未经压缩的生产包，并加入 vconsole，soucemap 供开发者调试
代码检查: npm run lint              - 检查src下面的js和style， 提交前要保证没有error
JS代码检查: npm run eslint          - 检查src目录下 .js .jsx后缀的代码,
JS代码检查修复: npm run eslint-fix    - 检查并修复src目录下 .js .jsx后缀的代码, 可修复一些格式问题
样式检查: npm run stylelint          - 检查并修复src目录下 .less后缀的样式
样式检查修复: npm run stylelint-fix   - 检查并修复src目录下 .less后缀的样式, 可修复一些格式问题

### 项目结构说明

一个可靠的 Apollo 项目可以按照如下方式进行组织

    ├── mock                   假数据 mock 文件
    ├── public                 里面的文件会在构建时默认拷贝到目标文件夹根目录
    ├── test                   单元测试脚本，执行 npm test 会跑该目录下的所有文件
    ├── src                    源码目录
    |   ├── assets             资源目录
    |   ├── components         公共组件目录
    |   ├── constants          项目常量
    |   ├── models             项目公共 model
    |   ├── pages              页面文件目录
    |   |   ├── counter        counter 页面目录
    |   |   |   ├── models     counter 模块 models
    |   |   |   ├── routes     counter 模块子路由
    |   |   |   ├── services   counter 请求文件
    |   |   |   ├── index.js   counter 模块对外提供的 dynamic
    |   |   |   └── counter.js counter 模块的实际路由配置
    |   ├── router             项目整体路由配置
    |   ├── services           项目公共请求接口
    |   ├── themes             主题和通用 mixin 配置
    |   |   ├── mixin.less     mixin 配置
    |   |   ├── theme.less     主题配置
    |   ├── utils              公共方法库
    |   ├── index.ejs          html 模版
    |   └── index.js           项目入口文件
    |   └── index.less         项目整体样式文件
    └── .babelrc               babel 配置，仅用于 test 脚本编译
    └── .eslintrc              eslint 配置
    └── .gitignore
    └── .roadhogrc.js          apollo-build 配置
    └── .roadhogrc..mock.js    mock 配置，会读取合并 mock 文件夹下的所有文件
    └── .stylelintrc           stylelint 配置
    └── .jsconfig.json         vscode 配置，用于支持编辑器内的别名跳转
    └── package.json
    └── README.md              项目说明
    └── theme.config.js        主题配置
    └── webpack.config.js      apollo-build 扩展的 webpack 配置


### 路由组件组织规范

参考 src/pages/counter/routes/home 下的文件组织：

- `HomePage.js` 连接 model ，处理业务逻辑
- `HomeView.js` 纯页面渲染
- `HomeView.less` css 样式

这三个文件可以通过 `apollo-cli` 快速生成：

```bash
# cd 到 home 所在文件夹
$ apollo g page home
```

### 路由跳转

路由跳转包含两种方式，第一种是采用 `Link` 组件的方式，第二种是通过导出的 `routerRedux` 结合 `apollo` 调用

例子：

```javascript
// Link 方式
import { Link } from 'apollo/router'

function Comp() {
  return (
    <Link to="/users?id=1">跳转</Link>
  )
}

export default Comp
```

```javascript
import { connect } from 'apollo'
import { routerRedux } from 'apollo/router'

function Comp(props) {
  const { goTo, goBack } = props

  return (
    <div>
      <div onClick={() => goTo('/users?id=1')}>跳转</div>
      <div onClick={goBack}>跳转</div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goTo(path) {
      dispatch(routerRedux.push(path))
    },
    goBack() {
      dispatch(routerRedux.goBack())
    }
  }
}

export default connect(null, mapDispatchToProps)(Comp)
```

### Mock数据
在src/mock下面，可以随意建新文件

### Proxy
推荐修改.roadhogrc.js里面的proxy对象

### 主题样式
推荐修改src/themes下面的样式表文件, theme.less是覆盖antd-mobile的变量，mixin支持自定义（注意：主题变量修改后需要重新启动项目才能生效）

最后会通过index.less发布出去

### 网络请求
使用的是src/utils/request.js， 最终使用的是apollo导出的fetch api , 可以根据后台接口情况修改这个文件

### 静态资源
1. 不走webpack的静态资源需要放到public目录下, 打包的时候会把public下面所有文件拷贝到最终发布的根目录下。npm run build的时候opt下面的文件会走一下uglify来压缩。

2. 需要通过webpack的资源，推荐放到 src/assets目录下，分为image和svg，放到对用的目录下, svg放到对应目录下会使用svg-sprite-loader 来跑，对于antd-mobile的icon组件可以直接用

### 组件使用
主要组件是antd-mobile
文档 https://mobile.ant.design/components

### 问题
1. antd mobile 2.0  modal 浏览器 点后退 会重复出现 (Ray)
2. antd mobile 2.0 icon如果用svg，需要使用1.x的ICON组件，因为2.x的ICON组件跟apollo-build用的svgSprite插件版本不匹配

### 其他

使用过程中如遇到问题，请联系：
duwenbin@mskj.com
