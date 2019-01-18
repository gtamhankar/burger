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

require('./controllers/burgers_controller.js')(app);
// or
//var controller = require('./controllers/burgers_controller.js');
//controller(app)


app.listen(PORT, function() {
    console.log("Eat-Da-Burger App listening on PORT " + PORT);
});