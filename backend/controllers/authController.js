// user_create

const User = require("../models/user");

const user_create = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("user not created");
  }
};

module.exports = {
  user_create,
};
