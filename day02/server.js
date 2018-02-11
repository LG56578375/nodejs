const http = require('http');

http.createServer((req,res)=>{
    let GET = {};

    if(req.url.indexOf('?')!=-1){
        let arr = req.url.split('?');
        var url = arr[0];
        let arr1 = arr[1].split('&');
        for(let i=0;i<arr1.length;i++){
            let arr2 = arr1[i].split('=');
            console.log(`arr2:${arr2}`);
            console.log(`arr2[0]:${arr2[0]}`);
            console.log(`arr2[1]:${arr2[1]}`);
            GET[arr2[0]]=arr2[1];
        }
    }else{
       var url =req.url;
    }

    console.log(url,GET);
    res.write('success');
    res.end();
}).listen(8080);