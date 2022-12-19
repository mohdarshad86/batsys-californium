const { count } = require("console");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  let allBooks = await BookModel.find({ autohrName: "PKk" });

  if (allBooks.length > 0) res.send({ msg: allBooks, condition: true });
  else res.send({ msg: "No books found", condition: false });
};

const updataBooks = async function (req, res) {
  let data = req.body; //{sales :1200}
  let allBooks = await BookModel.findOneAndUpdate(
    { autohrName: "PKkk" }, //condition
    { $set: data }, //update in data
    { new: true }
  );
  res.send({ msg: allBooks });
};

const getid = async function (req, res) {
  let body = req.body;
  if (body.authorid) {
    res.send("body");
  } else {
    res.send("Not avail");
  }
};
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updataBooks = updataBooks;
module.exports.getid = getid;

