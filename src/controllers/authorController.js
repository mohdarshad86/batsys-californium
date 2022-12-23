const AuthorModel = require("../models/authorModel");

const createAuthor = async (req, res) => {
  let authorCreated = await AuthorModel.create(req.body);
  res.send({ data: authorCreated });
};

const getAuthorsData = async function (req, res) {
  let authors = await AuthorModel.find();
  res.send({ data: authors });
};

module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;
