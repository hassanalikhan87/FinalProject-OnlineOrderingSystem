const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  menuitems: [
    {
      type: Schema.Types.ObjectId,
      ref: "menuitem"
    }
  ],
  specialinstructions: {
    type: String
  },
  name: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
