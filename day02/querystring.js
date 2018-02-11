const querystring = require('querystring');

let json = querystring.parse('a=2&b=3');
console.log(json);