const express = require('express');

const authMiddleware = require('../middleware/auth');

const otherController = require('../controllers/otherController');

const router = express.Router();

router.get('/', otherController.home);
router.get(
    '/management',
    authMiddleware.requireRole('admin'),
    otherController.management,
);

module.exports = router;
