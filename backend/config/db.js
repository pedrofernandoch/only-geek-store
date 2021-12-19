require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.createConnection(process.env.CONNECTION_STRING)

autoIncrement.initialize(connection)

const CateogrySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
})
CateogrySchema.plugin(autoIncrement.plugin, 'Category')

const SubCateogrySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
})
SubCateogrySchema.plugin(autoIncrement.plugin, 'SubCategory')

const ProductSchema = new Schema({
  photo: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  sub_category: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Invalid price.");
    },
  },
  stock: {
    type: Number,
    default: 0,
    validate(value) {
      if (value = 0) throw new Error("Restock.");
    },
  },
  units_sold: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Invalid value.");
    },
  },
})
ProductSchema.plugin(autoIncrement.plugin, 'Product')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  register_date: {
    type: Date,
    required: true,
  },
  wish_list: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  admin: {
    type: Boolean,
    default: false,
    required: true,
  }
})
UserSchema.plugin(autoIncrement.plugin, 'User')

const OrderSchema = new Schema({
  status: {
    type: String,
    require: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    }
  ]
})
OrderSchema.plugin(autoIncrement.plugin, 'Order')

const Product = connection.model("Product", ProductSchema)
const Order = connection.model("Order", OrderSchema)
const Category = connection.model("Category", CateogrySchema)
const SubCategory = connection.model("SubCategory", SubCateogrySchema)
const User = connection.model("User", UserSchema)

const db = {
  product: Product,
  order: Order,
  category: Category,
  subCategory: SubCategory,
  user: User
}

module.exports = db