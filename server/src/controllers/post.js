const Post = require("../models/post");

// Add a new post
const addNewPost = async (req, res) => {
    try {
        await Post.create(req.body);
        res.json({ msg: 'Post created' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Get all posts
const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ posts });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Get a specific post by ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json({ post });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Update a post by ID
const updatePostById = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json({ msg: 'Post updated successfully', updatedPost });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json({ msg: 'Post deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = { addNewPost, getAllPost, getPostById, updatePostById, deletePostById };
