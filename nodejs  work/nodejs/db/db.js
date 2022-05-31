
var mysql = require('mysql2');


var pool = mysql.createConnection({      //创建mysql实例
    host:'localhost',
    port:'3306',
    user:'root',
    password:'abmxkok199867',
    database:'node'
});




module.exports ={
    pool
}
