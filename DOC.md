###为什么需要脚手架？
工作中经常会基于react开发一些项目，出于以下初衷，搭建react boilerplate显然是非常有意义的。
-  新项目快速搭建环境
- 保证项目代码结构一致性和规范
- 工程化的落地与脚本复用
- 技术栈的调研与选型，使用优质的npm库但不滥用

附上：[react boilerplate源码](https://github.com/candice2cc/react-boilerplate)

###适用场景
现在还是有很多项目的后端接口依旧是java/php等其他技术语言编写，部署时基本是编译一个前端代码版本，然后把这些静态文件拷贝到java/php的web服务器下。
为什么还是这种陈旧的状况呢？主要还是由于部分前端开发同学对于后端开发相关的技术积累还不够，业务熟悉度也不够，还不能做到全栈开发。但相信这只是一个过渡时期。
因此，这个脚手架是基于该应用场景而设计，同时通过express提供web server,方便前后端接口联调测试（后续会提供一个“前后端同构”、“react+express”的“全栈boilerplate”）

###安装
```bash
npm install //安装所有的依赖包
npm run dev //启动开发环境
npm run build //编译一个产品版本的代码
npm start //启动产品环境进行测试
```
###技术栈
####react
react是一个前端视图框架。它可以理解为是MVC中的View。
- Virtual DOM
痛点：复杂或者频繁的DOM操作通常是Web开发性能瓶颈。
react引入了Virtual DOM机制，所有的DOM操作都是通过虚拟DOM进行，每当数据变化时，进行DOM diff，然后仅将需要变化的部分进行实际的浏览器DOM更新。
- Render
不再关注某个数据的变化如何更新到一个或多个具体的DOM上，只需要关心：在任意一个数据状态上，整个界面是如何Render的，且不像服务端Render，需要整个页面刷新
- 组件化
UI功能模块之间的分离：整个UI通过一个个独立的小组件构成大组件，每个组件只关心自己的逻辑，彼此独立。
特征：可组合、可重用、可维护、可测试

####react-router
react路由，当然，使用路由方便更新导航栏并使用对应的应用页面。更底层的原因是它提供了一套逻辑机制去拆分代码。

####redux
组件间通信形式：
1. 嵌套组件间，上层组件向下层组件传递回调函数，下层组件触发回调来更新上层组件的数据。
2. 以事件的形式，使用发布订阅的方式来通知数据更新。
3. Flux/Redux
当项目越来越大的时候，管理数据的事件或回调函数将越来越多，也将越来越不好管理了。
Redux 是一个用来管理数据状态和 UI 状态的 JavaScript 应用工具。随着 JavaScript 单页应用（Single Page Applications, SPAs）开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态），Redux 被创造用来让 state 的更易于管理。


![Free-Converter.com-redux-article-3-03-30585450.jpg](http://upload-images.jianshu.io/upload_images/617433-595206f31bf5c0f1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

更多可以学习[redux官网](http://redux.js.org/)或者[redux 介绍及配合 react开发](http://www.ferecord.com/learning-react-redux.html)、[redux最佳实践](https://blog.maxleap.cn/archives/930)

####react-redux
react-redux主要是用来帮助react component与redux的“链接”的高阶组件

####redux-thunk
redux-thunk 是一个比较流行的 redux 异步 action 中间件，比如 action 中有 setTimeout 或者通过  fetch 通用远程 API 这些场景，那么就应该使用 redux-thunk 了。redux-thunk 帮助统一了异步和同步 action 的调用方式，把异步过程放在 action 级别解决，对 component 没有影响。

###redux-router
暂未引入

####isomorphic-fetch
提供fetch api支持，同时支持nodejs和浏览器环境（前后端同构）
####es6-promise
ES6 promise polyfill，部分浏览器环境依旧还不支持Promise

###工程化
####需求
一个高性能、安全、可用的web网站，前端实践需要考虑：
- 缓存
- 压缩与合并
- 混淆
- 浏览器兼容
- 按需加载
- 首屏加速
- 语法编译
- ...

而为了提高开发效率，考虑以下：
- 开发服务器
- 热加载和热替换
- 自动化脚本
- ...

>工欲善其事必先利其器

####webpack1.x
引用webpack官方的一张示意图：
![what-is-webpack](http://upload-images.jianshu.io/upload_images/617433-2f4d103b6f115fc1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 插件
webpack有丰富的插件接口，可定制化
- Loaders
webpack通过loader支持各种文件预处理。允许将不同类型的静态资源进行打包（不仅仅是JavaScript）
- 代码分块

代码模块在到达浏览器前，应当事先编译打包。存在两种倾向：
    1. 一个模块一个请求
    2. 所有模块一个请求

以上两种都是次优解，当项目有一定复杂度和规模时，我们考虑分chunk传输。
webpack允许将代码分块，通过确定代码分割点，实现按需加载，加速首屏加载。

- 开发工具
webpack提供开发中间件和开发服务器，自动重新加载，并且生成SourceUrls和SoureMaps，方便调试。
- 性能
webpack使用异步I/O操作，多级缓存和增量编译机制
- 支持
webpack同时支持AMD和CommonJs的模块定义方式。因此支持使用绝大部分的已有库。（参考：[javascript模块化比较](http://www.jianshu.com/p/4aaf2b23c8b6)）
- 优化
webpack有很多优化手段减少静态文件大小，并且通过生成hash值方便浏览器请求缓存
- HMR
在不刷新浏览器的条件下，应用最新的代码更新


####webpack示例
```javascript
/**
 * Created by candice on 17/1/26.
 */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './client/index',
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'es6-promise',
            'isomorphic-fetch'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: 'js/[name].js',
        chunkFilename: 'js/chunk.[name]-[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'style',
                'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                'sass'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
            loader: 'url?limit=8000&name=img/[name]-[hash].[ext]'
        },
            {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'html?minimize=false'
            }]
    },
    resolve: {extensions: ['', '.js', '.json', '.scss', '.html']},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.DedupePlugin(), //打包的时候删除重复或者相似的文件
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'js/[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),  //热替换
        new webpack.NoErrorsPlugin(),  //报错但不退出webpack进程
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}), //定义变量
        new HtmlWebpackPlugin({                       //生成html
            filename: './index.html',
            template: './client/index.html',
            favicon: './client/common/assets/favicon.ico',
        }),
        new ProgressBarPlugin({summary: false})
    ],
};
```

###目录结构
```
/build/ compile输出
       /client 前端代码compile输出
       /server 服务端代码compile输出

/client/     前端目录
     /common/ 公共代码
             /actions/   redux actions
             /assets/    公共静态资源
             /components/   公共木偶组件
             /containers/   公共智能组件
             /reducers/     redux reducers
             /sass/         公共样式和公共组件样式
             /store/        redux store
             /util/         工具类与函数
             /config/       配置相关
     /module_a/ a模块
             /components/
             /containers/
             /sass/
     /module_b/ b模块
             /components/   木偶组件
             /containers/   智能组件
             /sass/         样式
     /index.html   入口html文件
     /index.js     入口js文件
     /routes.js    路由文件
/server/  服务端目录,用来mock服务端接口联调测试
        /routes/  控制层:api服务路由
        /app.dev.js    开发环境下的app.js
        /app.prod.js   产品环境下的app.js
     
     
/node_modules/ 第三方库
/tools/
       /webpack.config.dev.js  开发环境下的webpack配置
       /webpack.config.prod.js 产品环境下的webpack配置
/.babelrc     babel配置文件
/package.json  
/readme.md    说明文档
```