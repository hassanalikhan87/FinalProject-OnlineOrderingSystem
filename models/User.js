const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
  //Not Sure Yet
});

module.exports = User = mongoose.model("users", userSchema);
