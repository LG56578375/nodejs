const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser('asdfgsss'));
server.use('/aaa',(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('oh');
});