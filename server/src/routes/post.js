const express = require('express')
router = express.Router()
const {addNewPost,getAllPost}=require('../controllers/post')
router.post('/posts',addNewPost)
router.get('/posts',getAllPost)
module.exports=router
