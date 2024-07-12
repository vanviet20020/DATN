const express = require('express');

const authMiddleware = require('../middleware/auth');

const cinemaController = require('../controllers/cinemaController');

const router = express.Router();

router.get(
    '/create',
    authMiddleware.requireRole('admin'),
    cinemaController.createForm,
);
router.post(
    '/create',
    authMiddleware.requireRole('admin'),
    cinemaController.create,
);
router.get(
    '/management',
    authMiddleware.requireRole('admin'),
    cinemaController.management,
);
router.get('/search', cinemaController.search);
router.get('/geojson', cinemaController.geojson);
router.get('/map', cinemaController.map);
router.get('/:name', cinemaController.getDetail);
router.get(
    '/update/:id',
    authMiddleware.requireRole('admin'),
    cinemaController.getById,
);
router.put(
    '/update/:id',
    authMiddleware.requireRole('admin'),
    cinemaController.update,
);
router.delete(
    '/delete/:id',
    authMiddleware.requireRole('admin'),
    cinemaController.delete,
);

module.exports = router;
