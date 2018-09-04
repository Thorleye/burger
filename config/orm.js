var connection = require("./connection.js");
  
var orm = { 
    insertOne: function(cols, vals, cb){
        var queryString = "INSERT INTO burgers (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result)
        });
    },

    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
  //  updateOne: function();

}
module.exports = orm;