const express = require("express");
const router = express.Router();
const Item = require("../models/dbItems");

router.get("/items", (req, res) => {
  Item.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
