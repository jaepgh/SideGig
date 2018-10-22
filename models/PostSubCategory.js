const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSubCategorySchema = new Schema({
  //Atributes for PostSubCategory
  name: { type: String, required: true },
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "PostCategory"
  }
});

const PostSubCategory = mongoose.model(
  "PostSubCategory",
  PostSubCategorySchema
);

module.exports = PostSubCategory;
