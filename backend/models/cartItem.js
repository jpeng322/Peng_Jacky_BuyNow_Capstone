const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  productTitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  itemId: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("CartItem", CartItemSchema);
