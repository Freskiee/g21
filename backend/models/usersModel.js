const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor teclea un nombre"],
    },
    email: {
      type: String,
      required: [true, "Por favor teclea un e-mail"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Por favor teclea un password"],
    },
  },
  {
    timesStamps: true,
  }
);

module.exports = mongoose.model('User', userSchema)