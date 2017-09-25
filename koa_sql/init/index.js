const fs = require('fs');
// 找到sql
const getSqlContentMap =
 require('./util/get-sql-content-map');
// 数据库的连接
const { query } = require('./util/db')
let sqlContentMap = getSqlContentMap()
console.log(sqlContentMap)
// 创造所有的数据表
const eventLog = function(err, sqlFile, index) {
    console.log(`[SUCCESS]sql脚本文件
    ：${sqlFile} 第${index+1}条脚本来执行成功!`);
}
const createAllTables = async () => {
    // json对象
    for (let key in sqlContentMap) {
        // 每个数据库文件二进制
        // ; 分割  sql语句
        // query
        let sqlShell = sqlContentMap[key];
        let sqlShellList = sqlShell.split(';');
        for(let [i, shell] of sqlShellList.entries()) {
            if(shell.trim()) {
                let result = await query(shell)
                // if(result.serverStatus * 1 === 2) {

                // }
                eventLog(true, key, i);
            }
        }
    }
    console.log('sql执行脚本结束!')
    console.log('请按ctrl+c键退出!')
}
createAllTables();
