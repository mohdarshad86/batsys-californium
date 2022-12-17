const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    autohrName: String,
    tags: [String],
    date: {
      type: Date,
      default: Date.now,
    },
    isPublished: Boolean,
    prices: {
      INR: String,
      Euro: String,
    },
    sales: { type: Number, default: 10 },
    category: String,
    year: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //books



/** validation- required:true, unique, default 
 * 
 * DataType- String, Number, Date ,Boolean, Arrays,Objects
 * Buffer, objectId
 */
