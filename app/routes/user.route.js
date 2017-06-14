const UserController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.createUser);

router.route('/user/:_id')
    .get(UserController.getUser);


module.exports = router;