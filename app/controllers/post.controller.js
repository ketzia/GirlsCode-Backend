let Post = require('../models/Post');
let mongoose = require('mongoose');
let isValid =require('mongoose').Types.ObjectId.isValid;
let ObjectId = mongoose.Types.ObjectId;

exports.getPostByUser = function(req, res){
    if(!isValid(req.params.user_id)){
        return res.status(400).send({err:" Valid User_id is needed"});
    }

    Post.find({user_id : req.params.user_id}, function(err,posts){
        if(err){
           return  res.status(500).send({err:"Cannot find user"});
        }
        return res.status(200).send(posts);
    });

};

exports.getPosts = function(req,res){
    Post.find({}, function(err, posts){
        if(err){
            return res.status(500).send({err:err});
        }
        return res.send(posts);
    });
};

exports.deletePost = function(req,res){
    if(!isValid(req.params.user_id)){
        return res.status(500).send({err:"A valid user id is needed"});
    }
    if(!isValid(req.params._id)){
        return res.status(500).send({err:"A valid post id is needed"});
    }

    Post.findById(req.params._id,function(err,post){
        if(err){
            return res.status(500).send({err:err});
        }
        if(!post){
            return res.status(400).send({err: "Coudln't find post"});
        }

        post.remove(function(err){
            if(err){
                return res.status(500).send({err:err});
            }
            return res.status(200).send({msg: 'Post removed'});
        });
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
    if(!isValid(req.body.user_id)){
        return res.status(400).send({err:" Valid User_id is needed"});
    }

    // Then, it is needed to instantiate the class we're referring to, and assign each corresponding field from the body
    // to the object
    let post = new Post();
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

exports.editPost = function(req,res) {
    if (!isValid(req.body._id)) {
        return res.status(400).send({err: "Post id is not valid"});
    }

    Post.findById(req.body._id, function (err, post) {
        if (err) {
            return res.status(500).send({err: err});
        }
        if (!post) {
            return res.status(400).send({msg: "Couldn't find post"});
        }

        post.body = req.body.body;
        post.save(function (err) {
            if (err) {
                return res.status(500).send({err: err});
            }
            return res.status(200).send({msg: "Post updated succesfully"});
        });
    });
};


exports.getPost = function(req, res){
    if(!isValid(req.params._id)){
        return res.status(400).send({err:"Post is not valid"});
    }
    Post.findById(req.params._id,function(err,post){
        if(err){
            return res.status(500).send({err:err});
        }
        if(!post){
            return res.status(400).send({err: "Couldn't find post"});
        }
        return res.status(200).send(post);
    });
};


