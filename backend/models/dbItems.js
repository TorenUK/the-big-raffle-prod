const mongoose = require("mongoose");

// structure
const itemSchema = mongoose.Schema({
  id: String,
  name: String,
  image: String,
  price: Number,
  stock: Number,
});

module.exports = mongoose.model("items", itemSchema);
