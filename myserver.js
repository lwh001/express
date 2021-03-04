
const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');//引入body parser用于解析post的body
var fetch  = require("fetch");

app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.all('*', function(req, res, next) {//允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/public',express.static('public')); //静态资源文件


app.get('/', function (req, res) {
	res.send("hello word")

})

app.post('/jsonData', function (req, res) {
	let data = req.body;
	console.log(data);
	if(data.name =="李三岁"&&data.pwd =="007"){
		res.send({isSuccess:true,msg:"登陆成功"})
	}else{
		res.send({isSuccess:false,msg:"用户名或者密码错误"})
	}

})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

