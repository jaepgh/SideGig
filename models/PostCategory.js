const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostCategorySchema = new Schema({
  //Atributes for PostCategory
  category: {
    name: String
  }
});

const PostCategory = mongoose.model("PostCategory", PostCategorySchema);

module.exports = PostCategory;
