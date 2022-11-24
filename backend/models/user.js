const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const usersSchema  = new Schema({
  username: {
    type: String,
    require:true,
    unique: true
  },
  password: {
    type: String,
    require:true
  },
  cart: {
    type: Array,
    default: []
  }
});

const Users = mongoose.model('user', usersSchema);

module.exports = Users;