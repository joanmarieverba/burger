let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log("index", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("req.body.burger_name ", req.body.burger_name);
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    let burger_id = "id = " + req.params.id;

    console.log("burger_id", burger_id);

    burger.updateOne(burgers,[{ devoured: false }, { item_id: burger_id }], function (error) {
        if (error) throw err;
    });
});



// Export routes for server.js to use.
module.exports = router;
