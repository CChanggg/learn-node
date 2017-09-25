const fs=require('fs')
/**
 * 遍历目录下的文件目录
 * @param {string} pathResolve 需进行遍历的目录路径
 * @param {string} mime 遍历文件的后缀名
 * @return {Object} 返回遍历目录得结果
 */
const walkFile=function(pathResolve,mime){
    // sync同步的 
    // 前提，用绝对路径找到文件夹，停下来分析目录，readdirSync得到所有文件
    let files=fs.readdirSync(pathResolve)
    // console.log(files);
    let fileList={}
    for (let [i,item] of files.entries()){
        // 切割一下，得到文件名和mime
        let itemArr=item.split('\.')
        let itemMime=(itemArr.length>1)?itemArr[itemArr.length-1]:'undefined'
        // 文件+''将对像字符串化
        // 1+''
        // 强类型转换，String() Number()得到文件名
        let keyName=item + ' '
        // console.log(itemMime,keyName);
        if(mime===itemMime){
            fileList[item]=pathResolve + '/' + item
        }
    }
    return fileList
}
module.exports=walkFile
