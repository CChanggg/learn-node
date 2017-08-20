var express = require('express')
app = express(),
    server = require('http').createServer(app)
io = require('socket.io').listen(server),
    users = [];
// 提供一个静态服务器
app.use('/', express.static(__dirname + '/www'))

server.listen(3000)
io.sockets.on('connection', function(socket) {
    // 准备好了，已能连接
    // 广播电台
    socket.on('login', function(nickname) {
        socket.nickname = nickname
        users.push(nickname)
        socket.emit('loginSuccess');
        io.sockets.emit('system', nickname, users.length, 'login')
    })
})