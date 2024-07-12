const express = require('express');

const authMiddleware = require('../middleware/auth');

const ticketController = require('../controllers/ticketController');

const router = express.Router();

router.post('/book', authMiddleware.requireLogin, ticketController.book);
// router.get('/search', authMiddleware.requireRole('admin'), ticketController.search);

module.exports = router;
