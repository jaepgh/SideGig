const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostInfoSchema = new Schema({
  //Atributes for PostInfo
});

const PostInfo = mongoose.model("PostInfo", PostInfoSchema);

module.exports = PostInfo;
