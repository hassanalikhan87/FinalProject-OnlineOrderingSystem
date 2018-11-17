const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
menuItemSchema = new Schema({
  productid: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  comboname: {
    type: String,
    required: true
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
  //Not Sure Yet
});

module.exports = MenuItem = mongoose.model("menuitem", menuItemSchema);
