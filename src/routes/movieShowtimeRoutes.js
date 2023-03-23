const express = require('express');

const authMiddleware = require('../middleware/auth');

const movieShowtimeController = require('../controllers/movieShowtimeController');

const router = express.Router();

router.get(
    '/create',
    // authMiddleware.isAdmin,
    movieShowtimeController.createForm,
);
router.post('/create', authMiddleware.isAdmin, movieShowtimeController.create);
router.get(
    '/management',
    // authMiddleware.isAdmin,
    movieShowtimeController.management,
);
router.get(
    '/update/:id',
    authMiddleware.isAdmin,
    movieShowtimeController.getById,
);
router.put(
    '/update/:id',
    authMiddleware.isAdmin,
    movieShowtimeController.update,
);
router.delete(
    '/delete',
    authMiddleware.isAdmin,
    movieShowtimeController.delete,
);

module.exports = router;
