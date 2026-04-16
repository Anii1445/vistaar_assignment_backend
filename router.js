const express = require("express");
const router = express.Router();
const userController = require("./controllers/user_controller");
const customerController = require("./controllers/customer_controller");
const transactionController = require("./controllers/transaction_controller");
const accountController = require("./controllers/account_controller");

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/getCustomer").get(customerController.getCustomer);
router.route("/getAccountTransaction/:id").get(transactionController.getAccountTransaction);
router.route("/getAllDistinctProduct").get(accountController.getAllDistinctProduct);
router.route("/getTransactionBelow5000").get(accountController.transactionBelow5000);

module.exports = router;
