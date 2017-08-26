var express = require('express') //node.js官方推荐框架
var app = express()
var bodyParser = require('body-parser') //验证表单数据
var session = require('express-session')
var cookieParser = require('cookie-parser')
var indexRouter = require('./routes/index')
var userRouter = require('./routes/users')
var path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
    // 应用级别的路由设置 
    // request请求  response返回对象
    // next对象（可以将中间件向下传递）  error对象  在中间件middleware处理函数 安装的大部分都是
    // express 是基于中间件的web server 按照串联的方式，来提供服务
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) //转译
app.use(cookieParser())
app.use(session({
    secret: 'demo-test',
    name: 'mydemo',
    maxAge: 30 * 60 * 1000,
    resave: false,
    saveUninitialized: true
}))
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with, X_Requested_With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    res.header('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'OPTIONS') {
        res.end('options ok');
    } else {
        next();
    }
});
app.use('/', indexRouter)
app.use('/users', userRouter)
    // app.listen(3000)
module.exports = app