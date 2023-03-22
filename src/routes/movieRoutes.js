const express = require('express');

const authMiddleware = require('../middleware/auth');
const uploadFileMiddleware = require('../middleware/upload');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/create', movieController.createForm);
router.post('/create', uploadFileMiddleware, movieController.create);
router.get('/management', movieController.management);
router.get('/search', movieController.search);
router.get('/:name', movieController.getDetail);
router.get(
    '/update/:id',
    authMiddleware.isAdmin,
    uploadFileMiddleware,
    movieController.getById,
);
router.put(
    '/update/:id',
    authMiddleware.isAdmin,
    uploadFileMiddleware,
    movieController.update,
);
router.delete('/delete/:id', authMiddleware.isAdmin, movieController.delete);

module.exports = router;
