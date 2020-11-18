const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/order/create", orderController.order_create);

module.exports = router;
