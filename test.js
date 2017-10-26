var http = require('http');

var server = http.createServer(function(request, response){
  console.log("연결되었습니다")
  response.end("connected")
})

server.listen(7777, function(){
  console.log("server connected")
})
