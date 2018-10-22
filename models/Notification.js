const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const NotificationSchema = new Schema({
  //Atributes for Notification
  posting_id: String,
  title: String,
  description: String,
  read: Boolean,
  id_firebase: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  user_id_receiver: Boolean

});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
