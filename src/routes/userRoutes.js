const express = require('express');

const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/sign-up', userController.signUpForm);
router.post('/sign-up', userController.signUp);
router.get('/sign-in', userController.signInForm);
router.post('/sign-in', userController.signIn);
router.post(
    '/sign-off',
    authMiddleware.requireRole(['user', 'admin', 'super_admin']),
    userController.signOff,
);
router.post('/refresh-token', userController.refreshToken);
router.get(
    '/get-all',
    authMiddleware.requireRole(['admin', 'super_admin']),
    userController.getAll,
);

module.exports = router;
