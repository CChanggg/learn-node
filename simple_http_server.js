
// const url = `schema://host:port/path?query#hash`
// const url = `address://putong.shanghai.china：88088/jinkeroad/1111`

const http = require('http')
const server = http.createServer()
server.listen(8808)
const qs = require('querystring')

const  users = []
//每一次被调用的时候 on 后面的也会被调用一次
server.on('request', function (request, response) {

    const url = request.url
    const queryString = url.substr(url.indexOf('?') + 1, url.length)
    const path = url.substr(0, url.indexOf('?'))
    const query = qs.parse(queryString)
    console.log(query)

    let responseStr

    switch (path) {
        case '/user':
            switch (request.method) {
                case 'GET':
                    response.statusCode = 200                
                    response.end(JSON.stringify(users))
                    break
                case 'POST':
                const contentType = request.headers['content-type']
                
                if(contentType !== 'applcation/json'){
                    response.statusCode = 400
                    response.end('error')
                }

                let requestBodyStr = ''
                request.on('data', function (data) {
                    requestBodyStr += data.toString()
                })
                request.on('end', function () {
                    const user = JSON.parse(requestBodyStr)
                    users.push(user)
                    response.statusCode = 200
                    response.end(JSON.stringify(user))
                })
                break
            }
            break
        default:{
            response.statusCode = 404
            response.end('NOT_FOUND')
            break
        }
            break
    }
})