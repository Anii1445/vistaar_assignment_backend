const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(0);
    }
}

module.exports = connectDB;