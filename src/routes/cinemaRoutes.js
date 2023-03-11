const express = require('express');

const authMiddleware = require('../middleware/auth');

const cinemaController = require('../controllers/cinemaController');

const router = express.Router();

router.post('/create', authMiddleware.isAdmin, cinemaController.create);
router.get('/search', cinemaController.search);
router.get('/:name', cinemaController.getDetail);
router.get('/update/:id', authMiddleware.isAdmin, cinemaController.getById);
router.put('/update/:id', authMiddleware.isAdmin, cinemaController.update);
router.delete('/delete/:id', cinemaController.delete);

module.exports = router;
