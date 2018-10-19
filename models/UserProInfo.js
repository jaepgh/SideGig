const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProInfoSchema = new Schema({
  //Atributes for UserProInfo
  phone: Number,
  social: Array,
  id_firebase: Schema.Types.Mixed,
  email: String,
  expertise: Array
});

const UserProInfo = mongoose.model("UserProInfo", UserProInfoSchema);

module.exports = UserProInfo;
