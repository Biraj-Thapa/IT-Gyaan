const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title:String,
  content: String,
},{
    timestamps:true
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;