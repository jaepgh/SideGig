const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostInfoSchema = new Schema({
  //Atributes for PostInfo
  id_firebase: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  title: String,
  location: String,
  description: String,
  category: {
    name: String,
  },
  sub_cat: { 
    name: String,
  },
  price: mongoose.Decimal128,
  time_frame: Date,
  active: Boolean
});

const PostInfo = mongoose.model("PostInfo", PostInfoSchema);

module.exports = PostInfo;
