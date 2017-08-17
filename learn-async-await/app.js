let fs = require('fs');
let path = require('path');
let request = require('request');
const movieDir = __dirname + '/movies',
    exts = ['.mkv', '.avi', '.mp4', 'rm', 'rmvb', 'wmv'];

function readFiles() {
    return new Promise((resolve, reject) => {
        fs.readdir(movieDir, (err, files) => {
            resolve(files.filter(file =>
                    exts.includes(
                        path.parse(file).ext)
                ))
                // resolve();
        })
    })
}

function getPoster(name) {
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(name)}`
    console.log(url);
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error)
                return reject(error)
            resolve(body.subjects[0].images.large)
        })
    })
}
let savePoster = (name, url) => {
    // 请求的是一张图片 是二进制流 流向本地文件夹 movies 
    // createWriteStream 持续写入流
    // pipe将两个流接起来
    request.get(url).pipe(
        fs.createWriteStream(path.join(movieDir, name + '.jpg'))
    )
}


(async() => {
    let files = await readFiles();
    for (let file of files) {
        let { name } = path.parse(file)
        console.log(`正在获取[${name}]的海报`);
        // let post_url = await getPoster(name)
        // console.log(post_url);

        try {
            savePoster(name, await getPoster(name))
        } catch (e) {
            console.log(e);
        }
    }
})()