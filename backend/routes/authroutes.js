const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/user/create", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("user not created");
  }
});

module.exports = router;
