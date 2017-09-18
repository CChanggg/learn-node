const router = require('koa-router')();
const routers = router
    .get('/', async (ctx) => {
        const title = 'login home';
        await ctx.render('home', {
            title
        })
    })
module.exports = router;
