###技术栈
- react
- redux
- react-redux
- react-router
- redux-thunk
- isomorphic-fetch
- es6-promise
- express
- log4js



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
/logs/   项目日志文件
/server/  服务端目录
        /common/  服务端公共代码
        /config/  服务端配置
        /dao/     dao层
        /model/   model层,db sql
        /routes/  控制层:api服务路由
        /view_models/  视图model层,将业务数据转化为前端定制化展示数据
        /views/        视图层,有SEO要求的项目建议使用
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



###使用pm2部署运维
####全局安装pm2
```
npm install pm2 -g
```

####线上部署
编译

```localhost:react_boilerplate candice$ npm run build```

开启服务

```
localhost:react_boilerplate candice$ npm run pm2 start build/server/app.prod.js 
┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬──────────┐
│ App name │ id │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ watching │
├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼──────────┤
│ app.prod │ 0  │ fork │ 4075 │ online │ 0       │ 0s     │ 0%  │ 15.2 MB   │ disabled │
└──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```
 
查看 

```
localhost:react_boilerplate candice$ npm run pm2 list
┌──────────┬────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬──────────┐
│ App name │ id │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ watching │
├──────────┼────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼──────────┤
│ app.prod │ 0  │ fork │ 4075 │ online │ 0       │ 8s     │ 0%  │ 36.9 MB   │ disabled │
└──────────┴────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```
删除

```
localhost:react_boilerplate candice$ npm run pm2 delete 0
┌──────────┬────┬──────┬─────┬────────┬─────────┬────────┬─────┬─────┬──────────┐
│ App name │ id │ mode │ pid │ status │ restart │ uptime │ cpu │ mem │ watching │
└──────────┴────┴──────┴─────┴────────┴─────────┴────────┴─────┴─────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

####pm2常用命令
```bash
# General
$ npm install pm2 -g            # Install PM2
$ pm2 start app.js              # Start, Daemonize and auto-restart application (Node)
$ pm2 start app.py              # Start, Daemonize and auto-restart application (Python)
$ pm2 start npm -- start        # Start, Daemonize and auto-restart Node application

# Cluster Mode (Node.js only)
$ pm2 start app.js -i 4         # Start 4 instances of application in cluster mode
                                # it will load balance network queries to each app
$ pm2 reload all                # Zero Second Downtime Reload
$ pm2 scale [app-name] 10       # Scale Cluster app to 10 process

# Process Monitoring
$ pm2 list                      # List all processes started with PM2
$ pm2 monit                     # Display memory and cpu usage of each app
$ pm2 show [app-name]           # Show all informations about application

# Log management
$ pm2 logs                      # Display logs of all apps
$ pm2 logs [app-name]           # Display logs for a specific app
$ pm2 logs --json               # Logs in JSON format
$ pm2 flush
$ pm2 reloadLogs

# Process State Management
$ pm2 start app.js --name="api" # Start application and name it "api"
$ pm2 start app.js -- -a 34     # Start app and pass option "-a 34" as argument
$ pm2 start app.js --watch      # Restart application on file change
$ pm2 start script.sh           # Start bash script
$ pm2 start app.json            # Start all applications declared in app.json
$ pm2 reset [app-name]          # Reset all counters
$ pm2 stop all                  # Stop all apps
$ pm2 stop 0                    # Stop process with id 0
$ pm2 restart all               # Restart all apps
$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode
$ pm2 delete all                # Kill and delete all apps
$ pm2 delete 0                  # Delete app with id 0

# Startup/Boot management
$ pm2 startup                   # Detect init system, generate and configure pm2 boot on startup
$ pm2 save                      # Save current process list
$ pm2 resurrect                 # Restore previously save processes
$ pm2 unstartup                 # Disable and remove startup system

$ pm2 update                    # Save processes, kill PM2 and restore processes
$ pm2 generate                  # Generate a sample json configuration file

# Deployment
$ pm2 deploy app.json prod setup    # Setup "prod" remote server
$ pm2 deploy app.json prod          # Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2

# Module system
$ pm2 module:generate [name]    # Generate sample module with name [name]
$ pm2 install pm2-logrotate     # Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # Uninstall module
$ pm2 publish                   # Increment version, git push and npm publish
```
