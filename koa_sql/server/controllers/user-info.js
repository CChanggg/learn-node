const userInfoService = require('./../services/user-info')
module.exports = {
    async signIn (ctx) {
        let formData = ctx.request.body
        console.log(formData)
        // model orm 数据映射成一个对象 纯粹的做数据库描述
        // service 可以去做一个存贮业务
        let userResult = await userInfoService.signIn(formData)
        console.log(userResult)
        let result = {
            login: 'error',
            message: '用户名或密码为空'
        }
        if(userResult) {
            result = {
                login :'success'
            }
        }
        ctx.body = result

    }
}