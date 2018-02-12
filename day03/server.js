const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    let str = '';
    let i = 0;

    req.on('data',(data)=>{
        console.log(`第${i++}`)
        str+=data;
    });
    req.on('end',()=>{
        let  POST = querystring.parse(str);
        console.log(POST);
    })
}).listen(8080);