// 路由模块
const router = require('koa-router')()

const home = require('./home')
// api模块
const api = require('./api')
// 后台
const admin = require('./admin')
// const work = require('./work')
// const error = require('./error')
// 业务 api 后台

router
    .use('/', home.routes(), home.allowedMethods())
    .use('/api', api.routes(), api.allowedMethods())
    .use('/admin', admin.routes(), admin.allowedMethods())
    // .use('/work', work.routes(), work.allowedMethods())
    // .use('/error', error.routes(). error.allowedMethods())

    module.exports = router