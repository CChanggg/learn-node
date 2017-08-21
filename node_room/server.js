var http = require('http')
var fs = require('fs') //在硬盘中readfile -> 读取的时候到内存之中 IO处理
    //node.js是no blocking 异步处理    PHP会阻塞 
var path = require('path')
    // 根据文件扩展名 获得文件类型
var mime = require('mime')
var cache = [] //缓存文件内容 缓存会将东西放到内存之中 
var server = http.createServer(
    function(request, response) {
        // 伺服状态
        console.log(`${request.url}`);
        var filePath = false
        if (request.url == '/') {
            filePath = 'public/index.html'
        } else {
            filePath = 'public' + request.url
        }
        var absPath = './' + filePath
            //发送内容给用户 
        serverStatic(response, cache, absPath)
            // 请求方法 get post request.method head session cookie 
            // response statusCode 200(表示成功) 304 404 501 500
            // contentType : json html text 
            // send 
    })

function serverStatic(response, cache, absPath) {
    // 发送index.html给用户
    //文件有没有？ 有的话就发送，怎么发送？
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath])
    }
    fs.exists(absPath, function(exists) {
        if (exists) {
            // 找到文件
            fs.readFile(absPath, function(err, data) {
                if (err) {
                    send404(response)
                } else {
                    cache[absPath] = data
                    sendFile(response, absPath, data)
                }
            })
        } else {
            // 没找到 404
            send404(response)
        }
    })
}

function sendFile(response, filePath, fileContents) {
    console.log(path.basename(filePath))
    console.log(mime.lookup(path.basename(filePath)))
    response.writeHead(
        200, {
            "contentType": mime.lookup(path.basename(filePath))
        }
    )
    response.end(fileContents)
}

function send404(response) {
    // 浏览器去读会先读文件头，文件先把文件头发送，文件通过http请求发送，是二进制流慢慢到达的
    // on data  on end
    console.log('response 404');
    response.writeHead(
        404, {
            "content-type": "text/plain;charset=utf-8"
        }
    )
    response.write('出错了')
    response.end()
}
server.listen(3000, function() {
    console.log('Server listen on port 3000')
})