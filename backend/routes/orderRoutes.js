const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/order/create", orderController.order_create);
router.get("/order/find", orderController.order_find);

module.exports = router;
