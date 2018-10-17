const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProInfoSchema = new Schema({
  //Atributes for UserProInfo
});

const UserProInfo = mongoose.model("UserProInfo", UserProInfoSchema);

module.exports = UserProInfo;
