var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// 路由为/
app.use('/', express.static(__dirname + '/'));


io.on('connection', (socket) => {
  // console.log(socket);
})

http.listen(3000, function () {
  console.log('============================');
  console.log('启动成功~');
  console.log('地址：http://localhost:3000');
  console.log('============================');
})