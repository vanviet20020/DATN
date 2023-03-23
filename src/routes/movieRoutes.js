const express = require('express');

const authMiddleware = require('../middleware/auth');
const uploadFileMiddleware = require('../middleware/upload');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/create', authMiddleware.isAdmin, movieController.createForm);
router.post(
    '/create',
    authMiddleware.isAdmin,
    uploadFileMiddleware,
    movieController.create,
);
router.get('/management', authMiddleware.isAdmin, movieController.management);
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
router.put(
    '/update/:id/status',
    authMiddleware.isAdmin,
    movieController.updateStatus,
);
router.delete('/delete/:id', authMiddleware.isAdmin, movieController.delete);

module.exports = router;
