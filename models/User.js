const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Integer(10),
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", userSchema);
