const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ForumSchema = new Schema(
    {
        category :{
            type : String,
            required : true
        },

        date :{
            type : Date,
            default: Date.now()
        }


    }
);

exports.model = ForumSchema;