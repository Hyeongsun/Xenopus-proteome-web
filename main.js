var express = require('express'); // 웹 서버 사용
var fs = require('fs') // 파일 로드 사용
var path = require('path');
var app = express();
var port = 3000;

app.use(express.static(__dirname + 'Web'));
app.use(express.static('public'));
app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});
app.get('/figure_show.html', function(req,res){
    fs.readFile('A2M.png'), function (error,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
})
app.get('/', function(req, res){
    fs.readFile('1.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});
