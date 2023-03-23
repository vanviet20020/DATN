const express = require('express');

const authMiddleware = require('../middleware/auth');

const cinemaController = require('../controllers/cinemaController');

const router = express.Router();

router.get('/create', authMiddleware.isAdmin, cinemaController.createForm);
router.post('/create', authMiddleware.isAdmin, cinemaController.create);
router.get('/management', authMiddleware.isAdmin, cinemaController.management);
router.get('/search', cinemaController.search);
router.get('/geojson', cinemaController.geojson);
router.get('/map', cinemaController.map);
router.get('/:name', cinemaController.getDetail);
router.get('/update/:id', authMiddleware.isAdmin, cinemaController.getById);
router.put('/update/:id', authMiddleware.isAdmin, cinemaController.update);
router.delete('/delete/:id', authMiddleware.isAdmin, cinemaController.delete);

module.exports = router;
