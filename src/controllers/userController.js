const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {

  let savedData = await userModel.create(req.body);

  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password }); //{}, null
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is incorerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "californium",
      organisation: "FunctionUp",
    },
    "functionup-californium-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  res.send({ status: true, data: userDetails });
  
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { $push: { post: userData.post } },
    { new: true }
  );
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let deletedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  res.send({ status: true, data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
