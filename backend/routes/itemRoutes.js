const express = require("express");
const Item = require("../models/dbItems");
const router = express.Router();

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
