const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');
const fs = require('fs');

http.createServer((req,res)=>{
    //GET
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    let GET =obj.query;

    //POST
    let str='';
    req.on('data',(data)=>{
        str+=data;
    });
    req.on('end',()=>{
        const POST = querystring.parse(str);
        console.log(url,GET,POST);
    });
    //文件读取
    let path_name = `./www${url}`;
    fs.readFile(path_name,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })


}).listen(8080);