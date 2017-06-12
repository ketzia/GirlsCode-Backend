const UserController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.route('/users')
    .get(UserController.getUsers);
router.route('/create/user')
    .post(UserController.createUser);


module.exports = router;