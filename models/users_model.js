const { Schema, model, mongoose } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = new model("user", userSchema);

module.exports = User;
