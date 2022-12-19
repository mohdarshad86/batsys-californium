const bookModelAs = require("../models/bookModelAs");

//createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBookAs = async function (req, res) {
  let data = req.body;

  let allBooksAs = await bookModelAs.create(data);
  res.send({ msg: allBooksAs });
};

const getBookAs = async function (req, res) {
  let allBooksAs = await bookModelAs
    .find()
    .select({ bookName: 1, authorName: 1, _id: 0 });

  res.send({ msg: allBooksAs });
};
//getBooksInYear: takes year as input in post request and gives list of all books published
// that yea
const getBooksInYear = async function (req, res) {
  let year = req.body.year;

  let allBooksAs = await bookModelAs.find({ year: year });
  res.send({ msg: allBooksAs });
};

const getParticularBooks = async function (req, res) {
  let body = req.body;
  //hi

  if (body.bookName) {
    //if book name is present then use regex method
    body.bookName = { $regex: body.bookName, $options: "i" };
  }

  let allBooksAs = await bookModelAs.find(body);
  res.send({ msg: allBooksAs });
};

//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or
// “200INR” or “500INR
const getXINRBooks = async function (req, res) {
  let allBooksAs = await bookModelAs.find({
    "price.INR": { $in: [12, 13, 21] },
  });
  res.send({ msg: allBooksAs });
};

const getRandomBooks = async function (req, res) {
  let allBooksAs = await bookModelAs.find({
    $or: [
      {
        stockAvail: true,
      },
      {
        totalPages: { $gt: 500 },
      },
    ],
  });
  res.send({ msg: allBooksAs });
};
module.exports.createBookAs = createBookAs;
module.exports.getBookAs = getBookAs;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
