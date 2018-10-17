const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostPhotosSchema = new Schema({
  //Atributes for PostPhotos
});

const PostPhotos = mongoose.model("PostPhotos", PostPhotosSchema);

module.exports = PostPhotos;
