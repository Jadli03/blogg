const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim:true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    postImg: {
        type:String,
        default: "",
    },
    username: {
        type: String,
        required: true
    },
    category: {
        type: Array
    },

},
{timestamps: true});

module.exports = mongoose.model("Post",PostSchema);