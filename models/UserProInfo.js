const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProInfoSchema = new Schema({
  //Atributes for UserProInfo
  
  id_firebase: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  phone: Number,
  social: Array,
  expertise: Array,
  userCreated: {
    type: Date,
    default: Date.now
  },
});

const UserProInfo = mongoose.model("UserProInfo", UserProInfoSchema);

module.exports = UserProInfo;
