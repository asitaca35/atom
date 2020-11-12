// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;//꾸민거
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http =require('http')//서버 가동

var express = require('express')
var app = express()//express소환

var server = http.createServer();//함수가져와요
server.on('request',doRequest);
server.listen(80);
console.log('lets start the server');//파웨셀창에 보여주는거
function doRequest(req,res){
  res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})//utf-8한글가능
res.write('안녕하십니까 코딩러 김재민입네다');
res.end()//console처럼 웹페이지글자적는거
}
app.use(express.static('data'));
app.get('/',function(req,res){
res.send('나는 재민이야 <br> 안녕')
});//기본 위치=ㅣlocalhost3003//callback

app.get('/dynamic',function(req,res){
var sp = '';//빈문자열
for(var i=0;i<10;i++){
  s=s+ `<h1>${j} 월<br><h1>`
}
res.send(sp);

});


app.get('/login',function(req,res){
  res.send('로그인 못해 회원가입부터해')

});//login 커리스트링을 메인에 슬러시하고 붙임

app.listen(3003,function(){
  console.log('server running 3003 port');
})
