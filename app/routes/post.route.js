const PostController = require('../controllers/post.controller');
const express = require('express');
const router = express.Router();

router.route('/posts/create')
    .post(PostController.createPost);


module.exports = router;
