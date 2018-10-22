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
  }
};
