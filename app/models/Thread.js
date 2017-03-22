const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ThreadSchema = new Schema ({

    forum :{
        type: Schema.Types.ObjectId,
        ref: 'Forum'
    },
    title :{
        type : String,
        required : true
    },
    description :{
        type : String
    },
    date :{
        type : Date,
        default: Date.now()
    },
    score :{
        type : Number
    }


});

exports.model = ThreadSchema;