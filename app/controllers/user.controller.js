let jwt = require('jsonwebtoken');
let User = require('../models/User');
let mongoose = require('mongoose');
let isValid =require('mongoose').Types.ObjectId.isValid;
let ObjectId = mongoose.Types.ObjectId;

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
   // if(!req.body.country){
     //   return res.status(400).send({err: "Country is Missing"});
    //}
   // if(!req.body.birthday){
     //   return res.status(400).send({err: "Birthday is Missing"});
    //}
    if(!req.body.email){
        return res.status(400).send({err: "Email is Missing"});
    }
    if(!req.body.educationLevel){
        return res.status(400).send({err: "Education Level is Missing"});
    }
    let user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
   // user.country = req.body.country;
    user.email = req.body.email;
   // user.birthday = req.body.birthday;
    user.educationLevel = req.body.educationLevel;

    user.save(function(err){
        if(err) return res.status(500).send({err:err})
        return res.status(200).send({msg:"User created successfully"});
    });


};

exports.getUser = function(req, res){
    if(!isValid(req.params._id)){
        return res.status(400).send({err:"User is not valid"});
    }
    User.findById(req.params._id,function(err,user){
        if(err){
            return res.status(500).send({err:err});
        }
        if(!user){
            return res.status(400).send({err: "Couldn't find user"});
        }
        return res.status(200).send(user);
    });
};

exports.deleteUser = function(req,res) {
    if(!isValid(req.params._id)){
        return res.status(400).send({err:"User id is not valid"});
    }

    User.findById(req.params._id,function(err,user){
        if(err){
            return res.status(500).send({err:err});
        }
        if(!user){
            return res.status(400).send({err:"Couldn't find user"});
        }

        user.remove(function(err){
           if(err) {
               return res.status(500).send({err:err});
           }
           return res.status(200).send({msg: "user deleted successfully"});
        });
    });
};

exports.editUser = function(req,res){
  if(!isValid(req.body._id)){
      return res.status(400).send({err:"User id is not valid"});
  }
  User.findById(req.body._id,function(err,user){
      if(err){
          return res.status(500).send({err:err});
      }
      if(!user){
          return res.status(400).send({msg:"Couldn't find user"});
      }
      user.firstname = req.body.firstname;
      user.lastname= req.body.lastname;
      user.country = req.body.country;
      user.educationLevel = req.body.educationLevel;
      user.email = req.body.email;

      user.save(function(err){
          if(err){
              return res.status(500).send({err:err});
          }
          return res.status(200).send({msg: "User updated succesfully"});
      });

  });
};

exports.loginUser = function(req,res){

};
