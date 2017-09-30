const allConfig = require('./../../config')
const config = allConfig.database
const mysql = require('mysql')

const pool = mysql.createPool({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE
})

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err,connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}