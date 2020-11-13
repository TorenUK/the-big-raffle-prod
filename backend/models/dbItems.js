const mongoose = require("mongoose");

// structure
const itemSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

const Item = mongoose.model("item", itemSchema);
module.exports = Item;
