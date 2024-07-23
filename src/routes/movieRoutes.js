const express = require('express');

const authMiddleware = require('../middleware/auth');
const uploadFileMiddleware = require('../middleware/upload');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get(
    '/create',
    authMiddleware.requireRole(['admin', 'super_admin']),
    movieController.createForm,
);
router.post(
    '/create',
    authMiddleware.requireRole(['admin', 'super_admin']),
    uploadFileMiddleware,
    movieController.create,
);
router.get(
    '/management',
    authMiddleware.requireRole(['admin', 'super_admin']),
    movieController.management,
);
router.get('/search', movieController.search);
router.get('/detail/:name', movieController.getDetail);
router.get(
    '/update/:id',
    authMiddleware.requireRole(['admin', 'super_admin']),
    uploadFileMiddleware,
    movieController.getById,
);
router.put(
    '/update/:id',
    authMiddleware.requireRole(['admin', 'super_admin']),
    uploadFileMiddleware,
    movieController.update,
);
router.put(
    '/update/:id/status',
    authMiddleware.requireRole(['admin', 'super_admin']),
    movieController.updateStatus,
);
router.delete(
    '/delete/:id',
    authMiddleware.requireRole(['admin', 'super_admin']),
    movieController.delete,
);

module.exports = router;
