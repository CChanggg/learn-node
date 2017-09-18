const path=require('path');
const Koa=require('koa');
const views=require('koa-views');
const routers=require('./routes/index')
const app=new Koa();

app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
})),
app.use(routers.routes()).use(routers.allowedMethods())
app.listen(3001);
console.log('The Server is on port');