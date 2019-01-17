var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
	  console.log("inside burger.js selectall")
    });
  },
  
  create: function(obrgr, cb) {
    orm.insertOne(obrgr, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  },
  deleteOne: function(id, cb) {
    orm.deleteOne(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
