const express = require('express');

const authMiddleware = require('../middleware/auth');

const movieShowtimeController = require('../controllers/movieShowtimeController');

const router = express.Router();

router.get(
    '/create',
    // authMiddleware.requireRole('admin'),
    movieShowtimeController.createForm,
);
router.post(
    '/create',
    authMiddleware.requireRole('admin'),
    movieShowtimeController.create,
);
router.get(
    '/management',
    // authMiddleware.requireRole('admin'),
    movieShowtimeController.management,
);
router.get(
    '/update/:id',
    authMiddleware.requireRole('admin'),
    movieShowtimeController.getById,
);
router.put(
    '/update/:id',
    authMiddleware.requireRole('admin'),
    movieShowtimeController.update,
);
router.delete(
    '/delete',
    authMiddleware.requireRole('admin'),
    movieShowtimeController.delete,
);

module.exports = router;
