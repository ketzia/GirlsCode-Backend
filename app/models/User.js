const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new Schema(
    {
        firstname : {
            type : String,
            required : true
        },
        lastname :{
            type : String,
            required: true
        },
        username :{
            type : String,
            required: true,
            unique : true
        },
        email :{
            type : String,
            required: true,
            unique : true
        },
        country :{
            type : String,
            required : true
        },
        birthday :{
            type : Date,
            required : true
        },
        educationLevel : {
            type: String,
            enum: ['HighSchool', 'MiddleSchool', 'Bachelor\'s', 'Master\'s', 'PhD'],
            required: true
        },
        hash : String,
        salt : String,


    },
    {
        timestamps : true
    }
);



UserSchema.methods.generateJWT = function(){
    const expiry = new Date();
    expiry.setDate(expiry.getDate()+7);
    // crea token
    const token = jwt.sign({
        _id : this._id,
        firstname : this.firstname,
        lastname : this.lastname,
        email : this.email,
        country : this.country,
        birthday : this.birthday,
        educationLevel : this.educationLevel
    }, process.env.JWT_SECRET
    );
    return token;
};

module.exports = mongoose.model('User',UserSchema);
