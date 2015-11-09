var express = require('express');
var mongoose = require('mongoose');
var _ = require('lodash');
var bodyParser = require('body-parser');
var Post = require('./models/Post');



var god = (function() {
  var server = {},
    api = {},
    app = express(),
    db = {};

  api.middleWare = {
    auth: function(req, res, next) {
      // TODO Put real auth code here.
      console.log('Authed');
      next();
    }
  };

  function init() {
    dbConnect();
    setupMiddleware();

  }

  function dbConnect() {
    mongoose.connect('mongodb://localhost/test');
    db = mongoose.connection;
    dbOn();
  }

  function setupMiddleware() {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(api.middleWare.auth);
    // app.use(api.middleWare.auth);
    app.use(Post.Post().init(express, mongoose));
  }
  // TODO Make route to show all posts.
  // TODO Make route to sort posts by keywords
  // TODO Make route to get all keywords in posts.


  // var router = express.Router();



  // router.
  // Add the Post Routes

  // app.use(router);
  function dbOn(){
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(callback) {
      server = app.listen(3000, function() {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://localhost:3000');
      });
    });
  }


  init();
}());
