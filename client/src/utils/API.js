import axios from "axios";

export default {
  // Gets all Categories
  getCategories: function() {
    return axios.get("/api/postCategory");
  },

  // Saves user settings to the database
  saveUserInfo: function(userData) {
    return axios.post("/api/userInfo", userData);
  },

  // Gets the user with the given id
  getUserInfo: function(id) {
    return axios.get("/api/UserInfo/" + id);
  },

  // Updates the user with the given id
  updateUserInfo: function(id, userData) {
    return axios.put("/api/UserInfo/" + id, userData);
  },

  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/UserInfo/" + id);
  },

  // (Kas) Saves the job post to database
  saveJobPost: function() {
    return axios.post("api/postJob/")
  },

  // (Kas) Created routes for "Get", "Update" and "Delete" jobs, but commented them out.

  // // (Kas) Gets the job with the given id
  // getJobPost: function(id) {
  //   return axios.get("/api/postJob/" + id);
  // },

  // // (Kas) Updates the job with the given id
  // updateJobPost: function(id, userData) {
  //   return axios.put("/api/postJob/" + id, userData);
  // },

  // // (Kas) Deletes the job with the given id
  // deleteJobPost: function(id) {
  //   return axios.delete("/api/postJob/" + id);
  // },

};
