const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async (req, res) => {
  const { publisher, author } = req.body;

  if (!author) {
    return res.send({ status: false, message: "Send Author Id please!" });
  }
  if (!publisher) {
    return res.send({ status: false, message: "Send Publisher Id" });
  }

  const authorDetails = await authorModel.findOne({ _id: author });
  //if found will return complete author doc =>{}=object is a truthy value
  //else null will return => null is a falsy value

  if (!authorDetails) {
    return res.send({ status: false, msg: "Author doesnt exist" });
  }

  const publisherDetails = await publisherModel.findOne({ _id: publisher });
  //if found will return complete publisher doc =>{}=object is a truthy value
  //else null will return => null is a falsy value

  if (!publisherDetails) {
    return res.send({ status: false, msg: "Publisher doesnt exist" });
  }

  let bookCreated = await bookModel.create(req.body);
  res.send({ data: bookCreated });
};

const getBooksData = async function (req, res) {
  let books = await bookModel.find().populate("author").populate("publisher");
  res.send({ data: books });
};

//updateBook
const updateBook = async function (req, res) {
  const publishers = await publisherModel.find({
    name: { $in: ["Penguin", "HarperCollins"] },
  });

  const publisherIds = publishers.map((publisher) => publisher._id); //object to array{id} {id}=>[id] [id]
  //a
  const updateCover = await bookModel.updateMany(
    { publisher: { $in: publisherIds } },
    { $set: { isHardCover: true } }
  );

  //b
  const authors = await authorModel.find({ rating: { $gt: 3.5 } });
  const authorsIds = authors.map((authors) => authors._id);
  const updateData = await bookModel.updateMany(
    { author: { $in: authorsIds } },
    { $inc: { price: 10 } }
  );

  res.send({ coverMsg: updateCover, priceMsg: updateData});
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updateBook = updateBook;
