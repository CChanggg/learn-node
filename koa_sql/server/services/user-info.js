const userModel = require('./../models/user-info')

const user = {
   async signIn(formData) {
       let resultData = await userModel.getOneByUserNameAndPassword({
           'password': formData.password,
           'name': formData.userName
       })
       return resultData
   }
}
module.exports = user