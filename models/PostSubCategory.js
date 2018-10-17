const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSubCategorySchema = new Schema({
  //Atributes for PostSubCategory
});

const PostSubCategory = mongoose.model(
  "PostSubCategory",
  PostSubCategorySchema
);

module.exports = PostSubCategory;
