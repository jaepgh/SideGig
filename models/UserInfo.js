const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  //Identifier on firebase
  id_firebase: {
    type: String,
    unique: true,
    required: true
  },

  //Personal Info
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  phonePersonal: { type: String, required: true },
  imagePreviewUrl: { type: String },

  //Profesional Info
  profesional: { type: Boolean, default: true },
  emailBussiness: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phoneBussiness: { type: String, required: true },

  media: { type: Boolean, default: true },
  social: {
    facebook: String,
    instagram: String,
    linkedin: String,
    twitter: String
  },
  expertises: [
    {
      type: Schema.Types.ObjectId,
      ref: "PostCategory"
    }
  ]
});

const UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports = UserInfo;
