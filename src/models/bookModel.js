const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  autohrName: String,
  category: String,
  year: Number,
});

module.exports = mongoose.model("Book", bookSchema); //books
