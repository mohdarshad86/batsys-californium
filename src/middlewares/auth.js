const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const jwtMiddleware = async (req, res, next) => {

  let token = req.headers["x-Auth-Token"]; 
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(
    token,
    "functionup-californium-secret-key"
  );
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;

  //The logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.
  if (decodedToken.userId !== userId) {
    return res.send({
      status: false,
      msg: "User is not the same whom it pretending to be, i.e. an imposter",
    });
  }

  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  next();
};

module.exports.jwtMiddleware = jwtMiddleware;
