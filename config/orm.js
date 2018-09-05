var connection = require("./connection.js");

function printQuestionMarks(num) {
var arr = [];

for (var i = 0; i < num; i++) {
    arr.push("?");
}

return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
var arr = [];

// loop through the keys and push the key/value as a string int arr
for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
    // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
    }
}

return arr.toString();
}

var orm = { 
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table + "(";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
console.log(queryString)
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
    updateOne: function(objColVal, condition, cb){
        var queryString = "UPDATE burgers SET "
        queryString += objToSql(objColVal);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
        });
    }
}
module.exports = orm;