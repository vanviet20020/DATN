const express = require("express");
const multer = require('multer')
const upload = multer({ dest: '/public/img/Movies' })

const auth = require("../middleware/auth");

const movieController = require("../controllers/movieController");

const router = express.Router();

router.post('/create', upload.single("file"), movieController.create)

module.exports = router