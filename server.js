const express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Init app
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

// Public Folder
app.use(express.static('./public'));
console.log ("before controller");
//require('./controllers/burgers_controller.js');

var burger = require("./models/burger.js");

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
			console.log ("inside post updating result ");
			console.log (result);
		});
	   
    });
	
console.log ("after controller");

app.listen(PORT, function() {
    console.log("Eat-Da-Burger App listening on PORT " + PORT);
});