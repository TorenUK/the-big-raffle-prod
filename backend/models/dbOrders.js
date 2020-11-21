const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  email: String,
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  items: Array,
  status: String,
});

module.exports = mongoose.model("order", orderSchema);
