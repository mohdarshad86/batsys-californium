const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
  try {
    let savedData = await userModel.create(req.body);

    res.status(201).send({ msg: savedData });
  } catch (err) {
    res.status(400).send({ msg: { error: err.message } });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (!userName || !password) {
      return res.status(400).send({
        status: false,
        msg: "Please provide your Username or password",
      });
    }

    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    }); //{}, null

    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is incorerct",
      });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "californium",
      },
      "functionup-californium-secret-key"
    );

    res.setHeader("x-auth-token", token);

    res.status(201).send({ status: true, token: token });
  } catch (err) {
    res.status(401).send({ msg: { error: err.message } });
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);

    res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    res.status(401).send({ msg: { error: err.message } });
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $push: { post: userData.post } },
      { new: true }
    );
    res.status(201).send({ status: true, data: updatedUser });
  } catch (err) {
    console.log("Error", err.message);
    res.status(401).send({ msg: { error: err.message } });
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;

    if (!userId) {
      return res
        .status(400)
        .send({ status: false, msg: "Please provide your UserId" });
    }

    let deletedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: true } },
      { new: true }
    );
    res.send({ status: true, data: deletedUser });
  } catch (err) {
    console.log("Error", err.message);
    res.status(401).send({ msg: { error: err.message } });
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
