const PostController = require('../controllers/post.controller');
const express = require('express');
const router = express.Router();

router.route('/posts')
    .post(PostController.createPost)
    .get(PostController.getPosts);

router.route('/posts/:user_id')
    .get(PostController.getPostByUser);

router.route('/posts/:_id/user/:user_id')
    .delete(PostController.deletePost);

module.exports = router;
