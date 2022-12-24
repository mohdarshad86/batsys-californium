const newUser = require("../models/newUser");

//Assignment
const createUser = async  (req, res) =>{

  let userData = await newUser.create(req.body);
  res.send({ msg: userData });
};

//Assign
module.exports.createUser = createUser;
