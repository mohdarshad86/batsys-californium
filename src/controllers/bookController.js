const bookModel = require("../models/bookModel");

const getBooks = async (req, res) => {
  let books = await bookModel.find();
  res.send({ data: books,status:true } );
};

const createBooks = async (req, res) => {
  let createBooks = await bookModel.create(req.body);
  res.send({ data: createBooks, status:true });
};

module.exports.createBooks = createBooks;
module.exports.getBooks = getBooks;
