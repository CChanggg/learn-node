var https = require('https')
var http = require('http')
var fs = require('fs')
// sync await 保持单线程执行 | async ajax 
// readfile 是异步的
var ca = fs.readFileSync('./cert/srca.cer.pem')
console.log(ca)
// node里面处理二进制的格式 ->Buffer
var nodemailer = require('nodemailer')
// 邮件发送npm
var schedule = require('node-schedule')
// 得到用户在命令行的输入 
var scanf = require('scanf')
var program = require('commander')
var config = {
    time:'2017-9-14',
    from_station:'BJP',//始发站车站代码，这里是北京北
    end_station:'XMS',//厦门
    train_num:'K571',//车次
    your_mail:'373893135@qq.com',
}
var UA = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
// fs.readFile('')
queryTickets(config)
function queryTickets(config) {
    var options ={
        hostname:'kyfw.12306.cn',
        post: 443,
        method: 'GET',
        path:'/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT',
        ca:[ca],//证书
        headers: {
            'Connection':'keep-alive',
            'Host': 'kyfw.12306.cn',
            'User-Agent': UA ,//用户代理
            "Referer": "https://kyfw.12306.cn/otn/leftTicket/init",
            // referer 是在http请求时会带上来的，用node模拟正常的用户访问
            // 当浏览器向web服务器发送请求的时候，会带上Referer，告诉服务器我是从哪个页面链接过来的
            "Cookie":"__NRF=D2A7CA0EBB8DD82350AAB934FA35745B; JSESSIONID=0A02F03F9852081DDBFEA4AA03EF4252C569EB7AB1; _jc_save_detail=true; _jc_save_showIns=true; BIGipServerotn=1072693770.38945.0000; _jc_save_fromStation=%u77F3%u5BB6%u5E84%2CSJP; _jc_save_toStation=%u5408%u80A5%2CHFH; _jc_save_fromDate=2017-02-17; _jc_save_toDate=2017-01-19; _jc_save_wfdc_flag=dc"
        }


    }
    var req = https.get(options,function(res) {
        var data = ''
        res.on('data',function(buff) {
            data += buff//查询结果（JSON格式）
        })
        res.on('end',function(buff) {
            var jsonData
            try {
                jsonData = JSON.parse(data).data
                console.log(jsonData)
            }catch (e) {

            }
        })
        res.on('error',function(err){
            console.log('出错了')
        })
    })
}