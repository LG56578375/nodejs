const http = require('http');
const urLib = require('url');

http.createServer((req,res)=>{
    let GET = {};
    let urlib = urLib.parse(req.url,true);
    let url = urlib.pathname;
    GET = urlib.query



    console.log(url,GET);
    res.write('success');
    res.end();
}).listen(8081);