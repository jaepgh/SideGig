const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostInfoSchema = new Schema({
  //Atributes for PostInfo
  creator_id: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  contractor_id: String,

  title: { type: String, required: true },
  description: String,
  address: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  price: Number,
  dueDate: Date,
  category: {
    type: Schema.Types.ObjectId,
    ref: "PostCategory"
  },

  assigned: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
});

const PostInfo = mongoose.model("PostInfo", PostInfoSchema);

module.exports = PostInfo;
