const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const newsSchema  = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  image:{
    type: String,
    require: true
  },
  gt:{
    type: Number,
    require: true
  }
});

const Products = mongoose.model('new', newsSchema);

module.exports = Products;