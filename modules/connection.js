var mongoose = require('mongoose');

(function(){

  var init = function() {
    mongoose.connect('mongodb://localhost/test');
  }
  var __Connection = {

  };
  var Connection = {
    // mongo: __Connection.mongo,
    mongoose: mongoose
  };

  init();
  module.exports.Connection = function(){
    return Connection;
  }
})();
