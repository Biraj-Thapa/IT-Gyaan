const express = require('express');
const router = express.Router();
const { addNewPost, getAllPost, getPostById, updatePostById, deletePostById } = require('../controllers/post');


router.post('/posts', addNewPost);
router.get('/posts', getAllPost);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', updatePostById);
router.delete('/posts/:id', deletePostById);

module.exports = router;