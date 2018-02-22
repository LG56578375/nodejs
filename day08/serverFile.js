const express = require('express');
const pathLib = require('path');
const multer = require('multer');
const fs = require('fs');
let objMulter = multer({dest:'./www/upload/'});
let server = express();
server.use(objMulter.any());

server.post('/',(req,res)=>{
   let newName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
   fs.rename(req.files[0].path,newName,(err)=>{
       if(err){
           res.send('上传失败');
       }else{
           res.send('上传成功');
       }
   })


});


server.listen(8080);