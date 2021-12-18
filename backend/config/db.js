const mongoose = require('mongoose');

//Conctar banco
mongoose.connect('mongodb+srv://mari:mari@scc.x5pvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    calories: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      },
    },
  });

  const OrderSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    calories: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      },
    },
  });

  const CateogrySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    calories: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      },
    },
  });
  
  const Product = mongoose.model("Product", ProductSchema);
  const Order = mongoose.model("Product", OrderSchema);
  const Category = mongoose.model("Product", CateogrySchema);

  const db = {
    product: Product,
    order: Order,
    category: Category
  }

module.exports = db;