const express = require("express");
const router = express.Router();

//Assign
const productController = require("../controllers/productController");
const productMW = require("../middlewares/newMiddleware");
const userController = require("../controllers/newUserController");
const orderController = require("../controllers/orderController");

//Assignment
router.post("/createProduct", productController.createProduct);
router.post("/createUser", productMW.check, userController.createUser);
router.post("/createOrder", productMW.check, orderController.createOrder);

module.exports = router;
