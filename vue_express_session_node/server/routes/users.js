var express = require('express')
var router = express.Router()
    // 路径都是基于这个模块的
router.get('/', function(req, res) {
    if (req.session.views) {
        req.session.views++
            res.json({
                msg: '第' + req.session.views + '次访问'
            })
    } else {
        req.session.views = 1
        res.json({
            msg: '欢迎您的到来'
        })
    }
})
router.get('/home', (req, res) => {
    console.log(req.session.id)
    if (req.session.token) {
        res.json({
            token: req.session.token
        })
    } else {
        res.json({
            msg: '授权过期重新登录'
        })
    }
})
router.post('/login', (req, res) => {
    // url -> req -> controller -> model(去数据库里取数据) -> json/html -> res -> 200
    // 账号是多少？ 密码是多少？
    // 数据库检测
    console.log(req.body)
    let data = req.body,
        pwd = data.pwd ? data.pwd.toString() : '',
        phone = data.telphone ? data.telphone.toString() : ''
    if (phone === '') {
        res.json({
            code: 3003,
            msg: '手机号为空'
        })
    }
    if (pwd == '') {
        res.json({
            code: 3001,
            errmsg: '密码为空'
        })
    }
    let tPhone = '10086'
    let tPwd = '123456'
    if (phone != tPhone) {
        res.json({
            code: -1,
            errmsg: '账号不存在'
        })
    }
    if (pwd != tPwd) {
        res.json({
            code: -1,
            errmsg: '密码不正确'
        })
    }
    req.session.token = tPhone + '_' + randomToken()
    res.json({
            code: 200,
            token: req.session.token,
            msg: '登录成功'
        })
        //生成session中token随机数的一种算法
    function randomToken(len) {
        var len = len || 32
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        var maxpos = chars.length
        var str = ''
        for (var i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxpos))
        }
        return str
    }
})
router.post('/signout', (req, res) => {
    req.session.token = null
    res.json({
        code: 200,
        msg: '感谢使用'
    })
})
module.exports = router