const express = require('express');
const expressStatic = require('express-static');
let server = express();
server.listen(8080);
let users = {
    'zs':'111',
    'ls':'222',
    'wu':'333'
};
server.get('/login',(req,res)=>{
    let user = req.query['user'];
    let pass = req.query['pass'];
    if(users[user]==null){
        res.send({ok:false,msg:'此用户不存在'});
    }else if(users[user]!=pass){
        res.send({ok:false,msg:'密码不正确！'});
    }else{
        res.send({ok:true,msg:'登陆成功'});
    }
});
server.use(expressStatic('./www'));