const router=require('koa-router')();
const home=require('./home');
const github=require('./github');
router.use('/home',home.routes(),home.allowedMethods());
router.use('/github',github.routes(),github.allowedMethods());

module.exports=router;
