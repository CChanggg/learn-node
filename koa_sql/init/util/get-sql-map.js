const fs=require('fs')
const walkFile=require('./walk-file')
// __dirname当前绝对路径，__表示常量
// 获取所有的.sql文件列表
function getSqlMap(){
    let basePath=__dirname
    console.log(basePath)
    basePath=basePath.replace(/\\/g,'\/')
    let pathArr=basePath.split('\/')
    pathArr=pathArr.splice(0,pathArr.length-1)
    basePath=pathArr.join('/')+'/sql'
    console.log(basePath)
    let fileList=walkFile(basePath,'sql')
    return fileList;
}
module.exports=getSqlMap
