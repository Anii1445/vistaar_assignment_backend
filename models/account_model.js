const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  account_id: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  products: {
    type: [String],
    required: true,
  },
});

const Account = model("accounts", accountSchema);

module.exports = Account;
