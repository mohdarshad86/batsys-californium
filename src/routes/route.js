const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { jwtMiddleware } = require("../middlewares/jwtmiddleware");

router.post("/users", userController.createUser);

router.post("/login", userController.loginUser);

//The userId is sent by front end
router.get("/users/:userId", jwtMiddleware, userController.getUserData);

router.put("/users/:userId", jwtMiddleware, userController.updateUser);

router.delete("/users/:userId", jwtMiddleware, userController.deleteUser);
module.exports = router;
