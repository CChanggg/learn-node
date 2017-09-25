const fs = require('fs')
const getSqlMap=require('./get-sql-map')
var sqlContentMap = {}
function getSqlContent(fileName, path){
    let content = fs.readFileSync(path,'utf8')
    sqlContentMap[fileName] = content
}
function getSqlContentMap(){
    // 匹配sql文件 walk
    let sqlMap=getSqlMap();
    console.log(sqlMap)
    for (let key in sqlMap) {
        getSqlContent(key,sqlMap[key])
    }
    return sqlContentMap
}
module.exports=getSqlContentMap