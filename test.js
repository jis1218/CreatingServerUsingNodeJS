var http = require('http');

var server = http.createServer(function(request, response){
  console.log("연결되었습니다")
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write("<html><h1>하이루</h1><html>")
  response.end("connected")
})

server.listen(7777, function(){
  console.log("server connected")
})
