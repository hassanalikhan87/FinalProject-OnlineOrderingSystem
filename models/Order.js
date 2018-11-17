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
      _id: {
        type: Schema.Types.ObjectId,
        ref: "menuitem"
      },
      category: {
        type: String
      },
      productid: {
        type: String
      },
      comboname: {
        type: String
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageurl: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Order = mongoose.model("order", OrderSchema);
