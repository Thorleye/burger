var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "guestuser",
    password: "GuestSQL",
    database: "burgers_db"
});

connection.connect(function (err, res){
    if (error) throw err; 
    console.log("connected as ID: " + connection.threadID)
});

module.exports = connection;