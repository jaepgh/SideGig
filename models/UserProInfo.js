const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProInfoSchema = new Schema({
  //Atributes for UserProInfo
  phone: Number,
  social: Array,
  email: String,
  expertise: Array
});

const UserProInfo = mongoose.model("UserProInfo", UserProInfoSchema);

module.exports = UserProInfo;
