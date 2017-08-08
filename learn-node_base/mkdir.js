const fs = require('fs');

fs.mkdir('logs', error => {
    if (error) {
        console.log(error);
    } else {
        console.log('创建成功:logs');
    }
})