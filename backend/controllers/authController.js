// user_create, user_login

const User = require("../models/user");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

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

//create jwt
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "the secret", {
    expiresIn: maxAge,
  });
};

const user_create = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const user_login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("new login");
};

module.exports = {
  user_create,
  user_login,
};
