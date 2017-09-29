var baseWebpackConfig = require('./webpack.base.config')
var webpack = require('webpack')
var merge = require('webpack-merge')
module.exports = merge(baseWebpackConfig,{
    devtool:'source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify('development')
            }
        })
    ]
})
