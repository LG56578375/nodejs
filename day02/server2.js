const http = require('http');
const querystring = require('querystring');


http.createServer((req,res)=>{
    let GET = {};

    if(req.url.indexOf('?')!=-1){
        let arr = req.url.split('?');
        var url = arr[0];
        GET = querystring.parse(arr[1]);

    }else{
        var url =req.url;
    }

    console.log(url,GET);
    res.write('success');
    res.end();
}).listen(8080);