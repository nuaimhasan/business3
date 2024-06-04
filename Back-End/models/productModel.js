const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  subSubCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubSubCategory",
  },
  description: {
    type: String,
    required: true,
  },
  rent: {
    rent_type: {
      type: String,
    },
    rent_price: {
      type: Number,
    },
    rent_description: {
      type: String,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
