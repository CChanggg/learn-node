var router = require('koa-router')();
var userModel = require('../model/mysql.js');
var md5 = require('md5');

//显示表单
router.get('/signup',async(ctx, next) => {
    await ctx.render('signup', {})
})
//处理表单
router.post('/signup',async(ctx, next) => {
    console.log(ctx.request.body)
    // 注册有多种情况，静态的表达，先把前端调完
    // 接口: 接口的url，返回的数据格式及意义
    // url /signup post
    // data 3 成功 2 表示密码错误 1表示用户名已存在
    var user = {
        name: ctx.request.body.name,
        pass: ctx.request.body.password,
        repeatpass: ctx.request.body.repeatpass
    }
    // koa数据查询  await 数据库应用独立的  影视成为对象  模型对象backend
    // Users表的模型对象，负责向数据库的查找，
    // 类似于api，应用层
    // userModel Model层
    // node.js 异步 拟人化 
    await userModel.findDataByName(user.name)
        .then(result => {
            console.log(result);
            if (result.length) {
                ctx.body = {
                    data: 1
                }
            } else if (user.pass !== user.repeatpass || user.pass == '') {
                ctx.body = {
                    data: 2
                } 
            } else {
                // 注册成功
                ctx.body = {
                    data: 3
                }
                userModel.insertData([
                    ctx.request.body.name,
                    md5(ctx.request.body.password)
                ])
            }

        })
    })
module.exports = router