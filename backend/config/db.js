const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Conctar banco
mongoose.connect('mongodb+srv://mari:mari@scc.x5pvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    trim: true,
    index: true,
    unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    category:[{
      type: String,
      required: true
    }],
    description:{
      type: String,
      require: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Invalid price.");
      },
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      validate(value) {
        if (value = 0) throw new Error("Restock.");
      },
    },
    sold: {
      type: Number,
      required: true,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Invalid value.");
      },
    },
  });

  const OrderSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
      trim: true,
      index: true,
      unique: true,
    },
    status:{
      type: String,
      require: true,
      trim: true
    },
    user_id: {
      type: Number,
      required: true,
      trim: true,
      index: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Invalid price.");
      },
    },
  });

  const CateogrySchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
      trim: true,
      index: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
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