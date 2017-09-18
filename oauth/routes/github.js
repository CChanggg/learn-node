const router = require('koa-router')()
const config = require('../config')
const fetch=require('node-fetch')
const routes = router
    .get('/login', async (ctx) => {
        // 去到github授权页
        const dataStr = (new Date()).valueOf();
        var path = 'https://github.com/login/oauth/authorize';
        path += '?client_id=' + config.client_id;
        path += '&scope=' + config.scope;
        path += '&state=' + dataStr;
        console.log(path)
        // authorize 授权 申请一下我们的应用
        ctx.redirect(path)
    })
    .get('/oauth/callback',async(ctx)=>{
        const code=ctx.query.code
        // console.log(code)
        let path='https://github.com/login/oauth/access_token';
        const params={
            client_id:config.client_id,
            client_secret:config.client_secret,
            code:code
        }
        await fetch(path,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        })
        .then(res=>{
            console.log(res)
            return res.text()
        })
        .then(body=>{
            // console.log(body)
            const args=body.split('&');
            let arg=args[0].split('=');
            const access_token=arg[1];
            console.log(access_token);
            return access_token;
        })
        .then(async(token)=>{
            const url='https://api.github.com/user?access_token='+token
            console.log(url)
            await fetch(url)
                .then(res=>{
                    return res.json()
                })
                .then(res=>{
                    console.log(res)
                    ctx.body=res
                })
        })
    })

module.exports = routes;


// C 如果用户授权，认证服务器
// D 浏览器向资源服务器发出请求，申请令牌
// E 得到令牌