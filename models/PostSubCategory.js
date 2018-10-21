const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSubCategorySchema = new Schema({
  //Atributes for PostSubCategory
  sub_cat: {
    name: String
  }
});

const PostSubCategory = mongoose.model(
  "PostSubCategory",
  PostSubCategorySchema
);

module.exports = PostSubCategory;
