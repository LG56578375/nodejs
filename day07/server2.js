const express = require('express');
let server = express();
server.listen(8080);
server.use('/aaa',(req,res)=>{
    req.secret = 'asdfgsss';
    res.cookie('user','liu',{signed:true});
    res.send('haha');
});