const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostInfoSchema = new Schema({
  //Atributes for PostInfo
  user_id: ObjectId,
  title: String,
  location: String,
  description: String,
  price: mongoose.Decimal128,
  time_frame: Date,
  active: Boolean
});

const PostInfo = mongoose.model("PostInfo", PostInfoSchema);

module.exports = PostInfo;
