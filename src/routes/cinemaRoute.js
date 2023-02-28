const express = require("express");

const authMiddleware = require("../middleware/auth");

const cinemaController = require("../controllers/cinemaController");

const router = express.Router();

router.post("/create", cinemaController.create);
router.get("/search", cinemaController.search)
router.get("/update/:id", cinemaController.getById);
router.put("/update/:id", cinemaController.update);
router.delete("/delete", cinemaController.delete);

module.exports = router;
