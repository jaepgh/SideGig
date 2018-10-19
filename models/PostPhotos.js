const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId= Schema.ObjectId;

const PostPhotosSchema = new Schema({
  //Atributes for PostPhotos
  posting_id: ObjectId,
  address: Array
});

const PostPhotos = mongoose.model("PostPhotos", PostPhotosSchema);

module.exports = PostPhotos;
