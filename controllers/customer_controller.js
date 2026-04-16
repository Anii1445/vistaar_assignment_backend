const Customer = require("../models/customer_model");

const getCustomer = async (req, res) => {
  try {
    const response = await Customer.find({ active: true });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
    console.log(error);
  }
};

module.exports = { getCustomer };
