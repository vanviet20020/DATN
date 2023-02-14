const express = require("express");

const auth = require("../middleware/auth");

const cinemaController = require("../controllers/cinemaController");

const router = express.Router();

router.post("/create", auth.isAdmin, cinemaController.create);
router.put("/update/:id", cinemaController.update);
router.delete("/delete", cinemaController.delete);

module.exports = router;
