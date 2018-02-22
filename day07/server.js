const express = require('express');

let  server = express();
server.listen(8080);

server.use('/aaa',(req,res)=>{
    res.cookie('user','liu',{path:'/aaa',maxAge:30*24*3600*1000});
    res.send('ok');
})