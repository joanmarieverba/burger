// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, devours, cb) {
        orm.updateOne("burgers", objColVals, devours, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;
