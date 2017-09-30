const dbUtils = require('./../utils/db-util')

const user = {
    async getOneByUserNameAndPassword(options) {
        let _sql =`
        SELECT * FROM user_info
            WHERE password="${options.password}" and
            name = "${options.name}" limit 1`
            // 只要打印sql,手动拿到mysql命令行去执行一下、
        console.log(_sql)
        let result = await dbUtils.query(_sql)
        console.log(result)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        } 
        return result;
    }
}
module.exports = user