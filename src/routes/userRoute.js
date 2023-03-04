const express = require('express');

const userController = require('../controllers/userController');
const { route } = require('./cinemaRoute');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.get('/login-form', userController.loginForm);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;
