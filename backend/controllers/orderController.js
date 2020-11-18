// order_create

const Order = require("../models/dbOrders");

const order_create = async (req, res) => {
  const { email, name, address, items } = req.body;

  try {
    const order = await Order.create({
      email,
      name,
      address,
      items,
    });
    res.status(201).send({ order: order._id });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  order_create,
};
