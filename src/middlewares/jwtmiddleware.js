const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const jwtMiddleware = async (req, res, next) => {
  let token = req.headers["x-Auth-Token"]; //check for Any case
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  console.log(decodedToken);

  let userId = req.params.userId;

  if (decodedToken.userId !== userId) {
    return res.send({
      status: false,
      msg: "User is not the same whom it pretending to be, i.e. we have found an Imposter",
    });
  }

  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  next();
};

module.exports.jwtMiddleware = jwtMiddleware;
