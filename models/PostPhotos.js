const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostPhotosSchema = new Schema({
  //Atributes for PostPhotos
  posting_id: String,
  pic_address: Array
});

const PostPhotos = mongoose.model("PostPhotos", PostPhotosSchema);

module.exports = PostPhotos;
