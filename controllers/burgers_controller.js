var express = require("express");

//var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

module.exports = function(app) {

app.get("/", function(req, res) {
  burger.all(function(data) {
	  console.log (data);
  res.render("index", { readings: data });
});

}
