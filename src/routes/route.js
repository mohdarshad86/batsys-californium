const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");

//Assignment
const bookControllerAs = require("../controllers/bookControllerAs");

//User
// router.post("/createUser", UserController.createUser);
// router.get("/getUsersData", UserController.getUsersData);

//Session 1
router.post("/createBook", BookController.createBook);
router.get("/getBooksData", BookController.getBooksData);

//Assignment
router.post("/createBookAs", bookControllerAs.createBookAs);
router.get("/getBookAs", bookControllerAs.getBookAs);
router.post("/getBooksInYear", bookControllerAs.getBooksInYear);
router.post("/getParticularBooks", bookControllerAs.getParticularBooks);
router.get("/getXINRBooks", bookControllerAs.getXINRBooks);
router.get("/getRandomBooks", bookControllerAs.getRandomBooks);

//session 2
router.post("/updataBooks", BookController.updataBooks);
router.post("/getid", BookController.getid);


module.exports = router;
