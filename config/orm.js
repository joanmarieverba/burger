// Import MySQL connection.
let connection = require("../config/connection.js");

// Object for all our SQL statement functions.
let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (?, ?)";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


    // Update is to update devour from false to true
    updateOne: function (table, id, cb) {
        var queryString = "UPDATE " + table + " SET ? WHERE ?";

        console.log(queryString);
        connection.query(queryString, id, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

};

// Export the orm object for the model (burger.js)
module.exports = orm;
