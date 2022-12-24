const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: "newUser" },
    productId: { type: ObjectId, ref: "newProduct" },
    amount: Number,
    date: String,
    isFreeAppUser: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("newOrder", orderSchema); //users

