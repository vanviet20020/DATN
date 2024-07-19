const express = require('express');

const authMiddleware = require('../middleware/auth');

const ticketController = require('../controllers/ticketController');

const router = express.Router();

router.post(
    '/book',
    authMiddleware.requireRole(['user', 'admin', 'super_admin']),
    ticketController.book,
);
// router.get(
//     '/search',
//     authMiddleware.requireRole(['admin', 'super_admin']),
//     ticketController.search,
// );

module.exports = router;
