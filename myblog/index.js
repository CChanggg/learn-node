const Koa = require('koa');
const path = require('path')
const app = new Koa();
const router = require('koa-router');
const views = require('koa-views');
var koaStatic = require('koa-static');
const config = require('./config/default.js');
const bodyParser = require('koa-bodyparser');

app.use(koaStatic(
    path.join(__dirname,'./public')))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(bodyParser());
app.use(require('./routers/signup.js').routes())
app.listen(config.port);
console.log(`listening on port ${config.port}`)