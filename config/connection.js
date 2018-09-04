var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "guestuser",
    password: "GuestSQL",    
    port: 3306,
    database: "burgers_db"
});

connection.connect(function (err, res){
    if (err) throw err; 
});

module.exports = connection;