const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId= Schema.ObjectId;

const NotificationSchema = new Schema({
  //Atributes for Notification
  posting_id: ObjectId,
  title: String,
  description: String,
  read: Boolean,
  user_id: ObjectId,
  user_id_receiver: Boolean

});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
