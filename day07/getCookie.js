const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);
server.use(cookieParser());
server.use('/aaa',(req,res)=>{
    console.log(req.cookies);
    res.send('ok');
});