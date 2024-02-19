const Post = require("../models/post");

const addNewPost = async(req,res)=>{
    await Post.create (req.body)
    res.json({msg:'post created'})  
}
const getAllPost=async(req,res)=>{
    const post= await Post.find()
    res.json({post})
}
module.exports = { addNewPost,getAllPost };