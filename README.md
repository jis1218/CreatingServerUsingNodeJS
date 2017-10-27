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

##### http 프로토콜 head에 대한 설명
http://applegod.tistory.com/entry/HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-HEAD
##### HEAD는 http 요청 방식 중 하나인데 흔히 클라이언트가 요청한 URI의 컨텐츠가 웹서버에 존재하는지 여부를 확인할수 있다
##### writeHead 함수는 status code와 Response 시의 문서 타입에 대해 정의하고 있는 것 같다. 그래서 writeHead 함수를 사용하지 않고
##### 요청을 하면 응답하는데 에러가 있다.
```
response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
response.write("<html><h1>하이루</h1><html>")
```

##### http Status code
##### 200 - 성공, 400 - 잘못된 요청, 403 - Forbidden, 404 - 찾을 수 없음(Not found), 408 - 요청시간 초과
