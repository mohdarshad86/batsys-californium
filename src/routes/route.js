const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const practice = require("./player.js");
const bookController = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createUser", UserController.createUser);
router.get("/getUsersData", UserController.getUsersData);

router.get("/getBooksData", bookController.getBooksData);
router.post("/createBooks", bookController.createBooks);

router.use("/", practice);

module.exports = router;