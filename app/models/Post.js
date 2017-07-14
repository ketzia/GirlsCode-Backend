const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({

    body :{
        type : String,
        required: true
    },
    title :{
        type : String,
        required : true
    },
    date :{
        type : Date,
        default: Date.now()
    },
    user_id :{
        type:  Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('Post',PostSchema);