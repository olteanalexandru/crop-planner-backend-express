export {};
const express = require('express')
const router = express.Router()
const { protect } = require('../Middleware/authMiddleware')

const {getPost, getAllPosts, GetSpecific, createPost, updatePost, deletePost} = require('../Controllers/postController')

router.route('/').get(protect, getPost).post(protect, createPost)
router.route('/posts').get(getAllPosts)
router.route('/posts/:id').get(GetSpecific)
router.route('/:id').delete(protect, deletePost).put(protect, updatePost)

module.exports = router


