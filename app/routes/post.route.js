const PostController = require('../controllers/post.controller');
const express = require('express');
const router = express.Router();

router.route('/posts/create')
    .post(PostController.createPost);

router.route('/posts')
    .get(PostController.getPosts);


module.exports = router;
