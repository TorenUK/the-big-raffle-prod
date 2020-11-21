// order_create // order_find_all // order_find_one

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
      status: "created",
    });
    res.status(201).send({
      name: name,
      order: order._id,
      address: address,
      items: items,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const order_find = async (req, res) => {
  const email = req.query.email;
  console.log(email, "<- customer");

  await Order.findOne({ email: email }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = {
  order_create,
  order_find,
};
