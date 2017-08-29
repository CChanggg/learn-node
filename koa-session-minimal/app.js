const Koa = require('koa')
const app = new Koa()
    // Server端 node.js  client端 dom ajax js
    // 向引入的模块传参
require('./config')(app)
    //路由 在引入的同时传参
require('./routes')(app)
    //调用和执行一起 
app.listen(3000)