const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");

// //middleware
// const middleware = require("../middlewares/middleware");
// router.get("/test-me", function (req, res) {
//   res.send("My first ever api!");
// });

router.post("/authors", authorController.createAuthor);
router.get("/authors", authorController.getAuthorsData);

router.post("/publishers", publisherController.createPublisher);
router.get("/publishers", publisherController.getPublisherData);

router.post("/books", bookController.createBook);
router.get("/books", bookController.getBooksData);
router.put("/books", bookController.updateBook);

//middleware
// router.post("/createBook", middleware.checkIsLogin, bookController.createBook);

module.exports = router;
