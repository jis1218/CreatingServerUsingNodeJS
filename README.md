# 서버 구축과 서버에 접근하는 법

##### node.js를 통해 서버를 구축할 수 있다.
'''
var http = require('http');

var server = http.createServer(function(request, response){
  console.log("연결되었습니다")
  response.end("connected")
})

server.listen(7777, function(){
  console.log("server connected")
})
'''

##### 서버에 http 프로토콜로 접근하기 위해서는 구축시 포트 번호를 넣게 되는데 이 포트번호는 Client가 서버에 접속하기 위한 번호이다.
##### 브라우저에 http:(서버주소):(포트) 이런 식으로 넣으면 된다.
