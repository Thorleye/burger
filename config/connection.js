var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MysqlPackers17",    
    port: 3306,
    database: "burgers_db"
});

connection.connect(function (err, res){
    if (err) throw err; 
});

module.exports = connection;