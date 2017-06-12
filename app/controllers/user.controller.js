var jwt = require('jsonwebtoken');
var User = require('../models/User');

exports.getUsers = function(req, res){
    User.find({}, function(err,users){
       if(err){
           return res.status(500).send({err:err});
       }
       else {
           return res.send(users);
       }
    });
};

exports.createUser = function(req, res){
    // Validate whether all elements are present

    if(!req.body.firstname){
        return res.status(400).send({err: "First Name is Missing"});
    }
    if(!req.body.lastname){
        return res.status(400).send({err: "Last Name is Missing"});
    }
    if(!req.body.username){
        return res.status(400).send({err: "User Name is Missing"});
    }
    if(!req.body.country){
        return res.status(400).send({err: "Country is Missing"});
    }
    if(!req.body.birthday){
        return res.status(400).send({err: "Birthday is Missing"});
    }
    if(!req.body.educationLevel){
        return res.status(400).send({err: "Education Level is Missing"});
    }
    const user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
    user.country = req.body.country;
    user.birthday = req.body.birthday;
    user.educationLevel = req.body.educationLevel;

    user.save(function(err){
        if(err) return res.status(500).send({err:err})
        return res.status(200).send({msg:"User created successfully"});
    });


};

exports.getUser = function(req, res){

};

exports.loginUser = function(req,res){

};
