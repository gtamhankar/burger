// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  selectAll: function(callback) {
    var s = " SELECT * FROM " + tableName + " where devoured = 0 order by id desc";
    connection.query(s, function(err, result) {
      callback(result);
	  console.log("inside orm selectAll");
	  console.log(result);
    });
  },

  deleteOne: function(id, callback) {
    var s = "DELETE FROM " + tableName + " WHERE id=?";
    connection.query(s, [id], function(err, result) {
		console.log(s);
		console.log(result);
		callback(result);
    });
  },

  insertOne: function(brgr, callback) {
    var s = "INSERT INTO " + tableName + " ( `burger_name`,`devoured`) VALUES( '" +     brgr.name + "' ,"  + brgr.devoured + ")" ;
	console.log(s);
    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  updateOne: function(id, callback) {
    var s = "UPDATE " + tableName + " SET  devoured=1 WHERE id=?";
    connection.query(s, [id], function(err, result) {
     console.log(s);
		console.log(result);
		callback(result);
    });
  }

};

module.exports = orm;
