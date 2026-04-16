const { Schema, model, mongoose } = require("mongoose");
const transactionSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transaction_code: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  total: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

const accountTransactionSchema = new Schema({
  account_id: {
    type: Number,
    required: true,
    index: true,
  },
  transaction_count: {
    type: Number,
    required: true,
  },
  bucket_start_date: {
    type: Date,
    required: true,
  },
  bucket_end_date: {
    type: Date,
    required: true,
  },
  transactions: {
    type: [transactionSchema],
    required: true,
  },
});

const Transaction = new model("transactions", accountTransactionSchema);

module.exports = Transaction;
