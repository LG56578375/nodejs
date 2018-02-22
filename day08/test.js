const mysql = require('mysql');

let db = mysql.createConnection({host:'localhost',user:'root',password:'root',database:'liu'});

db.query('SELECT * FROM `user_table`',(err,data)=>{
    if(err){
        console.log("fail",err);
    }else{
        console.log('success',data);
        console.log(JSON.stringify(data));
    }
});