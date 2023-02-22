const express = require("express");
const multer = require('multer')
const upload = multer({ dest: '/public/img/Movies' })

const authMiddleware = require("../middleware/auth");
const uploadFileMiddleware = require("../middleware/upload")

const movieController = require("../controllers/movieController");

const router = express.Router();

router.post('/create', uploadFileMiddleware, movieController.create)
router.put('/update/:id', uploadFileMiddleware, movieController.update)
router.delete('/delete/:id', movieController.delete)
module.exports = router