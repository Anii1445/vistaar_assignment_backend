const User = require("../models/users_model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const phoneExist = await User.findOne({ phone });
    if (phoneExist) {
      return res.status(400).json({ msg: "Phone number already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      name,
      phone,
      email,
      password: hashPassword,
    });
    if (!createUser) {
      return res.status(400).json({ msg: "User not registered" });
    }

    res.status(200).json({ msg: "Registration Succesfully!" });
  } catch (error) {
    res.status(500).json("Internal Server Error", error);
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const passwordExist = await bcrypt.compare(password, userExist.password);
    if (passwordExist) {
      res.status(200).json({ msg: "Login Successful", userInfo: userExist });
    } else {
      return res.status(400).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    return res.status(500).json("Internal Server Error", error);
    console.log(error);
  }
};

module.exports = { register, login };
