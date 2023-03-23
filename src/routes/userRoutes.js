const express = require('express');

const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/sign-up', userController.signUpForm);
router.post('/sign-up', userController.signUp);
router.get('/login', userController.loginForm);
router.post('/login', userController.login);
router.get('/logout', authMiddleware.requireLogin, userController.logout);

module.exports = router;
