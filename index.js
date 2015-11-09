var express = require('express');
var mongoose = require('mongoose');
var _ = require('lodash');
var bodyParser = require('body-parser');



var Post = require('./models/Post');
var prompt = require('prompt');

var api = {},
  app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// TODO Make route to show all posts.
// TODO Make route to sort posts by keywords
// TODO Make route to get all keywords in posts.

api.middleWare = {
  auth: function(req, res, next) {
    // TODO Put real auth code here.
    console.log('Authed');
    next();
  }
};

var router = express.Router();



router.use(api.middleWare.auth);
// Add the Post Routes
app.use(Post.Post().init(express, mongoose));
// app.use(router);
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
