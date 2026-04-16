const Transaction = require("../models/transaction_model");

const getAccountTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Transaction.find({ account_id: Number(id) });

    if (!response || response.length === 0) {
      return res.status(400).json({ msg: "Couldn't fetch the data" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { getAccountTransaction };
