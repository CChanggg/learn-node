const Router = require('koa-router')()
const defaultUser = {
    username: 'laowang',
    password: '123456'
}
const tips = `
    GET    / 查看登录信息
    POST   / {username：laowang; password: 123456} 登录
    DELETE / 注销
`
module.exports = app => {
    Router.get('/', ctx => {
        if (ctx.session.user) {
            ctx.body = {
                status: '您已登录',
                session: ctx.session.user
            }
        } else {
            ctx.body = tips
        }
    })
    Router.post('/', ctx => {
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        console.log(username, password)
        if (ctx.session.user) {
            ctx.body = `${ctx.session.user.username}已登录，请不要再登录`
        } else {
            if (username == defaultUser.username && password == defaultUser.password) {
                ctx.session.user = {
                    username,
                    password
                }
                ctx.body = '登录成功，请访问GET /查看session中的信息'
            } else {
                ctx.body = '用户名或密码不正确'
            }
        }
    })
    Router.del('/', ctx => {
        ctx.session = null
        ctx.body = '您已注销'
    })
    app.use(Router.routes())
}