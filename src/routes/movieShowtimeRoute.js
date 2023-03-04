const express = require('express');

const authMiddleware = require('../middleware/auth');

const movieShowtimeController = require('../controllers/movieShowtimeController');

const router = express.Router();

router.post('/create', movieShowtimeController.create);
router.get('/search', movieShowtimeController.search);
router.get('/update/:id', movieShowtimeController.getById);
router.put('/update/:id', movieShowtimeController.update);
router.delete('/delete', movieShowtimeController.delete);

module.exports = router;
