const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const routers = router 
    .post('/user/signIn.json', userInfoController.signIn)

module.exports = routers