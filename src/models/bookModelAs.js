const mongoose = require("mongoose");

const bookSchemaAs = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: String,
    tags: [String],
    year: { type: Number, default: 2021 },
    totalPages: Number,
    price: {
      INR: String,
      EURO: String,
      JPN: String,
    },
    sales: { type: Number, default: 0 },
    completionDate: Date,
    stockAvail: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookAs", bookSchemaAs);
