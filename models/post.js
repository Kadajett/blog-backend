// var connection = require('../modules/Connection');
var mongoose = require('mongoose');


(function(){
  var self = this;
  var __Post = {
    // schema: connection.mongoose.Schema()
  };
  var Post = {
  };

  function setUpModels(mongoose){
    Post.model = mongoose.model('Post', {
      title: String,
      body: String,
      date: Number
    })
  }

  function setupRoutes(express){
    var router = express.Router();
    router.route('/posts')
      .get(function(req, res) {
        console.log("Posts: GET: ", req.body);
        Post
          .model
          .find(function(err, result) {
            console.log("Searching Post Model");
            if (err) {
              res.send(err);
              console.error(err);
            }
            res.send(result);
            console.log("Saved Posts: ", result);
          })
      })
      .post(function(req, res) {
        var body = req.body;
        if (body && body.title && body.body) {
          var post = new Post.model({
            title: body.title,
            body: body.body,
            date: new Date().getTime()
          })
          post.save();
          res.sendStatus(200);
        } else {
          if(!body.title){
            res.status(400).send({message: "Title for blog post is required"});
          }
          else if(!body.body) {
            res.status(400).send({message: "Body for blog post is required"});
          }

        }
      });
      return router;
  }
  // @ghDox *Start*
  // @params
  // @ghDox *End*
  Post.init = function(express, mongoose){
    setUpModels(mongoose);
    var router = setupRoutes(express);
    return router;
  }
  module.exports.Post = function(){
    return Post;
  }
})();
