const bookModel = require("../models/bookModel");

const getBooks = async (req, res) => {
  //1.find() methods

  // (i) count, sort, select
  // let allBooks = await bookModel
  //   .find()
  // .sort({ sales: -1 })
  // .select({ _id: 0, bookName: 0 });
  //
  //(ii) Pagination
  let page = req.query.page;
  // let allBooks = await bookModel
  //   .find()
  //   .skip(3 * (page - 1))
  //   .limit(3);
  //limit
  // let allBooks = await bookModel
  //   .find()
  //   .sort({ sales: -1 })
  //   .skip(3 * (page - 1))
  //   .limit(3)
  //   .select({ bookName: 1, autohrName: 1, sales: 1, _id: 0 });

  //Operators:-
  // let allBooks = await bookModel.find({ sales: { $gt: 60 } });
  // let allBooks = await bookModel.find({ sales: { $lt: 60 } });
  // let allBooks = await bookModel.find({ sales:{$in:[107, 127, 237]}}).count();
  // let allBooks = await bookModel
  //   .find({ sales: { $nin: [107, 127, 237] } })
  //   .count();
  // let allBooks = await bookModel
  //   .find({ sales: { $gt: 100, $lt: 200 } })
  //   .count();

  //2.findById() & findOne() method
  //
  // let allBooks = await bookModel.findById("639b61807f4249bb5f94d0f4");
  // let allBooks = await bookModel.findOne({ sales: 7 });
  //
  //
  //UPDATE() || findbyidAndUpdate, updateOne/Many

  // let allBooks = await bookModel.update(
  //   { sales: { $lt: 10 } },
  //   { $set: { isPublished: true } }
  // );
  //
  //RegEx
  //
  // let allBooks = await bookModel.find({ bookName: /^the/ }); //start caseSensitive
  // let allBooks = await bookModel.find({ bookName: /^tHe/i });//strt caseInsensitive
  // let allBooks = await bookModel.find({ bookName: /Things$/ }); //end with
  // let allBooks = await bookModel.find({ bookName: /.*THiNgs.*/i }); //include this word
  //

  //
  //Async Awaits
  // let allBooks = await bookModel.find();
  res.send({ data: allBooks, status: true });
};

const createBooks = async (req, res) => {
  let createBooks = await bookModel.create(req.body);
  res.send({ data: createBooks, status: true });
};

module.exports.createBooks = createBooks;
module.exports.getBooksData = getBooks;
