const  express = require('express');
const  bodyParser = require('./libs/my-body-parser')

let server = express();
server.listen(8080);

server.use(bodyParser.aa());
server.use('/',(req,res)=>{
    console.log(req.body);
});