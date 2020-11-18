// user_create, user_login

const User = require("../models/user");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "email not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "incorrect email/password combination";
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "email already in use";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const user_create = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const user_login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  user_create,
  user_login,
};
