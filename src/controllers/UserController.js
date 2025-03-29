const userModel = require("../models/UserModel");
const { createPassword, comparePassword } = require("../utils/genPassword");

const createUser = async (req, res) => {
  try {
    req.body.password = createPassword(req.body.password);
    let registeredUser = await userModel.create(req.body);

    res.status(201).json({
      data: registeredUser,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({
      err: err,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    console.log(user);

    if (!user) {
      return res.status(200).json({
        data: user,
        message: "User not found",
      });
    }

    if (!comparePassword(req.body.password, user.password)) {
      return res.status(200).json({
        data: user,
        message: "Invalid Credentials",
      });
    } else {
      return res.status(200).json({
        data: user,
        message: "User logged in successfully",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({
      err: error,
    });
  }
};

module.exports = { createUser, loginUser };
