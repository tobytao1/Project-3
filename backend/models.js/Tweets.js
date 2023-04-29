const mongoose = require('mongoose');
const Schema = mongoose.Schema
const TweetsSchema = new Schema({
    content:{
        type: String,
        required: true,
        maxLength:280
    },
    imageUrl: {
        type: String,
        trim: true
    },
    user: {
        type: String,
    }
},{timestamps:true})

const Tweets = mongoose.model('Tweets',TweetsSchema);
module.exports = Tweets