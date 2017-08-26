var express = require('express')
var router = express.Router()
    // 路径都是基于这个模块的
router.get('/', function(req, res) {
    // 除了向浏览器发送内容还会中止中间件传递 .send
    res.render('index', {
        name: '肠肠'
    })
})

module.exports = router

// 模块路由
// /users  /books /movies