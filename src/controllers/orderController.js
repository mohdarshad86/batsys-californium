const newOrder = require("../models/newOrder");
const newUser = require("../models/newUser");
const newProduct = require("../models/newProduct");

//Assignment
const createOrder = async function (req, res) {
  let order = req.body;

  const userDetails = await newUser.findOne({ _id: order.userId });
  //if found will return complete user doc =>{}=object is a truthy value
  //else null will return => null is a falsy value
  if (!userDetails) {
    return res.send({ status: false, msg: "User doesnt exist" });
  }

  const productDetails = await newProduct.findOne({ _id: order.productId });
  //if found will return complete author doc =>{}=object is a truthy value
  //else null will return => null is a falsy value

  if (!productDetails) {
    return res.send({ status: false, msg: "Product doesnt exist" });
  }

  if (order.isFreeAppUser === "true") {
    order.amount = 0;
  } else {
    await newUser.findOneAndUpdate(
      { _id: order.userId },
      { $inc: { balance: -1 * productDetails.price } }
    );
    order.amount = productDetails.price;
  }

  let orderData = await newOrder.create(order);
  res.send({ msg: orderData });
};

//Assign
module.exports.createOrder = createOrder;
