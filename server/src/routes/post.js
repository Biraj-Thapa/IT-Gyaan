const express = require('express');
const router = express.Router();
const { addNewPost, getAllPost, getPostById, updatePostById, deletePostById } = require('../controllers/post');

// Add a new post
router.post('/posts', addNewPost);

// Get all posts
router.get('/posts', getAllPost);

// Get a specific post by ID
router.get('/posts/:id', getPostById);

// Update a post by ID
router.put('/posts/:id', updatePostById);

// Delete a post by ID
router.delete('/posts/:id', deletePostById);

module.exports = router;