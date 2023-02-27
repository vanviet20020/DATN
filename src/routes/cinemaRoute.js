const express = require("express");

const authMiddleware = require("../middleware/auth");

const cinemaController = require("../controllers/cinemaController");

const router = express.Router();

router.post("/create", cinemaController.create);
router.put("/update/:id", cinemaController.update);
router.delete("/delete", cinemaController.delete);

module.exports = router;
