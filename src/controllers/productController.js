const productModel = require("../models/newProduct");


//Assignment
const createProduct = async (req, res)=> {
  let productData = await productModel.create(req.body);
  res.send({ msg: productData });
};


//Assign
module.exports.createProduct = createProduct;
