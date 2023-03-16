const express = require('express');

const authMiddleware = require('../middleware/auth');

const cinemaController = require('../controllers/cinemaController');

const router = express.Router();

router.get('/create-form', cinemaController.createForm);
router.post('/create', cinemaController.create);
router.get('/search', cinemaController.search);
router.get('/:name', cinemaController.getDetail);
router.get('/update/:id', cinemaController.getById);
router.put('/update/:id', cinemaController.update);
router.delete('/delete/:id', cinemaController.delete);

module.exports = router;
