var path = require('path')
var webpack = require('webpack')
    // webpack 配置文件 是一个打包器 将一切前端任务打包
    // 打包（css js template） 插件化 启动服务器
module.exports = {
    entry: './src/main.js', // 单点入口
    output: { //出口
        path: path.resolve(__dirname, '.dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // vue里面一个组件，一个文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jsp|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]' // hash是版本号
                }
            }
        ]
    },
    plugins: [ //插件 拔插的功能
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}