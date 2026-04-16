const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    username: String,
    name: String,
    address: String,
    email: String,
    active: Boolean,
    accounts: [Number],
  },
  { strict: false },
);

const Customer = new model("customers", customerSchema);

module.exports = Customer;
