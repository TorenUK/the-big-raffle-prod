// order_create

const Order = require("../models/dbOrders");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {};

  // validation errors
  if (err.message.includes("order validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const order_create = async (req, res) => {
  const { email, name, address, items } = req.body;

  try {
    const order = await Order.create({
      email,
      name,
      address,
      items,
    });
    res.status(201).send({ name: name, order: order._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  order_create,
};
