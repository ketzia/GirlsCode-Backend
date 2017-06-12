var Post = require('../models/Post');
var mongoose = require('mongoose');
var isValid =require('mongoose').Types.ObjectId.isValid;
var ObjectId = mongoose.Types.ObjectId;

exports.getPostByUser = function(req, res){
};

exports.getPosts = function(req,res){
    Post.find({}, function(err, posts){
        if(err){
            return res.status(500).send({err:err});
        }
        res.send(posts);
    });
};

exports.createPost = function(req,res){
    //We need to get all fields from the body from our model
    if(!req.body.body){
        return res.status(400).send({err:"Content is needed"});
    }
    if(!req.body.title){
        return res.status(400).send({err:"Title is needed"});
    }
    if(!req.body.user_id){
        return res.status(400).send({err:"User_id is needed"});
    }

    // Then, it is needed to instantiate the class we're referring to, and assign each corresponding field from the body
    // to the object
    const post = new Post();
    post.body = req.body.body;
    post.title = req.body.title;
    post.user_id = req.body.user_id;

    post.save(function(err){
        if(err){
            return res.status(500).send({err:err});
        }
        res.status(200).send({msg:"Post created succesfully"});
    });

};