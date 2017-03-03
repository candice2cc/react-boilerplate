###教程
[react boilerplate设计&&技术栈](http://www.jianshu.com/p/5ddc498283c6)

###技术栈
- react
- redux
- react-redux
- react-router
- redux-thunk
- isomorphic-fetch
- es6-promise
- express



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



