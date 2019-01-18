var express = require("express");

//var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


module.exports = function(app) {

app.get("/", function(req, res) {
  //res.render("index" );

  burger.all(function(data) {
	  var hbsObject = {
      readings: data
    };
	  console.log (data);
  res.render("index", hbsObject);
  });
});


    app.post("/api/addBurger", function(req, res) {
		console.log ("inside add burger post");
		   var newBurger = {
            name: req.body.name,
            devoured: req.body.devoured,           
        };	
	   console.log (newBurger);
	    burger.create(newBurger, function(result) {
			// Send back the ID of the new quote
			res.json({ id: result.insertId });
			console.log ("inside post printing result ");
			console.log (result);
		});
	   
    });

	
	app.post("/api/DevourBurger", function(req, res) {
		console.log ("inside add burger post");
		   var id = req.body.id;	
	   
	    burger.update(id, function(result) {
			// Send back the ID of the new quote
			res.json({ id: result.insertId });
			console.log ("inside post devouvoring result ");
			console.log (result);
		});	   
    });
	
	app.post("/api/DeleteBurger", function(req, res) {
		console.log ("inside add burger post");
		   var id = req.body.id;	
	   
	    burger.deleteOne(id, function(result) {
			// Send back the ID of the new quote
			res.json({ id: result.insertId });
			console.log ("inside post deleting result ");
			console.log (result);
		});	   
    });


}
