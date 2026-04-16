const Account = require("../models/account_model");
const Transaction = require("../models/transaction_model");

const getAllDistinctProduct = async (req, res) => {
  try {
    const response = await Account.distinct("products");

    if (!response || response.length === 0) {
      return res.status(400).json({ msg: "Not data found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ msg: "Internal server error", error });
    console.log(error);
  }
};

const transactionBelow5000 = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    console.log(page);
    const skip = (page - 1) * limit;

    const response = await Transaction.find(
      {
        "transactions.amount": { $lt: 5000 },
      },
      {
        account_id: 1,
        transactions: { $elemMatch: { amount: { $lt: 5000 } } },
        _id: 0,
      },
    )
      .skip(skip)
      .limit(limit);

    const total = await Transaction.countDocuments({
      "transactions.amount": { $lt: 5000 },
    });

    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No data found" });
    }

    res.status(200).json({
      response,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(400).json({ msg: "Internal server error", error });
    console.log(error);
  }
};

module.exports = { getAllDistinctProduct, transactionBelow5000 };
