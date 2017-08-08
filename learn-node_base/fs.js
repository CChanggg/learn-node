// require 模块化方案
// fs 核心模块
// require将第三方库 文件引入模块
const fs = require('fs');
// node 的功能是分模块的，
// 前端没有fileSystem
// node 是负责后端的 Linux 服务器在一起的
// 宿主环境不一样 Ubuntu
// node 是异步无阻塞的后端 并处相当牛逼
// node的习惯：callback 第一个参是错误 信息交给第二个参数
fs.stat('a.js', (err, stats) => {
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        console.log(`目录：${stats.isDirectory()}`);
        console.log(`创建时间：${stats.ctime}`);
        console.log(`文件大小：${stats.size}`);
    }
})