const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostCategorySchema = new Schema({
  //Atributes for PostCategory
});

const PostCategory = mongoose.model("PostCategory", PostCategorySchema);

module.exports = PostCategory;
