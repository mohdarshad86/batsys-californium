const authorModel = require("../models/author.js");
const bookModel = require("../models/book.js");

//CREATE BOOKS
const createBook = async (req, res) => {
  const createData = await bookModel.create(req.body);

  res.send({ msg: createData });
};

//GET BOOKS
const getBook = async (req, res) => {
  const authorData = await authorModel
    .findOne({ author_name: "Chetan Bhagat" })
    .select({ author_id: 1, _id: 0 });
  let data = await bookModel.find(authorData).select({ name: 1, _id: 0 });

  res.send({ msg: data });
};
//CREATE Author
const createAuthor = async function (req, res) {
  const createData = await authorModel.create(req.body);

  res.send({ msg: createData });
};
//GET AUTHORS
const getAuthor = async function (req, res) {
  const getData = authorModel
    .find({ authorName: "Chetan Bhagat" })
    .select({ author_id: 1, _id: 0 });
  let id = getData.author_id;
  let result = await bookModel.updateMany({ author_id: id }, { price: 100 });

  res.send({ msg: result });
};
//GET BOOK NAME &
const getBookName = async function (req, res) {
  const newBookData = await bookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  );

  let authorData = await authorModel
    .findOne({ author_id: newBookData.author_id })
    .select({ author_name: 1, _id: 0 });

  res.send({ msg: { name: authorData.author_name, price: newBookData.price } });
};

const getPrice = async function (req, res) {
  const priceData = await bookModel
    .find({ price: { $gte: 50, $lte: 100 } })
    .select({ name: 1, author_id: 1, _id: 0 });

  let authorData = await Promise.all(
    priceData.map(async (x) => {
      let data = await authorModel
        .findOne({ author_id: x.author_id })
        .select({ author_name: 1, _id: 0 });

      return { name: x.name, author_name: data.author_name };
    })
  );

  res.send({ msg: authorData });
};


module.exports.createBook = createBook;
module.exports.getBook = getBook;

module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor;

//
module.exports.getBookName = getBookName;
//
module.exports.getPrice = getPrice;
