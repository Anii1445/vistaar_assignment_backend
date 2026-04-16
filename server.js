const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
require("dotenv").config();
const router = require("./router");

const corsOptions = {
  origin: ["http://localhost:5173","https://vistaar-assignment-frontend.vercel.app/"],
  methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth/", router);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
  });
});
