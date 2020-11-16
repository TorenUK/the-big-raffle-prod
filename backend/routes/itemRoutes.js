const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/items", itemController.item_index);
router.get("/items/:id", itemController.item_individual);

module.exports = router;
