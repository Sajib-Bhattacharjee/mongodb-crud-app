const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Must have to be string format"],
    // minlength: [4, "The title's minimum length should be 4 character"],
    // maxlength: [100, "The title's maximum length can be 100 Characcter"],
    // trim: true,
    // enum: ["iPhone","Samsung"]
    // unum: {
    //   value: ["iPhone", "Samsung"],
    //   message: "The {VALUE} is not supported",
    // },
  },
  price: {
    type: String,
    required: true,
    min: 3,
    max: 10,
  },
  // email: {
  //   type: String,
  //   unique: true
  // },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Product Model.

const Product = mongoose.model("Products", productsSchema);

module.exports = Product;
