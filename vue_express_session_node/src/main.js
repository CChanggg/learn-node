import Vue from "vue"
import App from './App.vue'
// 跟后端通信的模块
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/' //自动加域名配置
axios.defaults.withCredentials = true //跨域
global.axios = axios
    // 引入路由 来自于后面的文件
import router from './routers'

new Vue({
    el: '#app',
    router, // 作用：vue插件机制
    render: h => h(App)
})