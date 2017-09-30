// 由路由交给controller处理
const router = require('koa-router')()
const index = require('../controllers/index')

module.exports = router
    .get('/', index)