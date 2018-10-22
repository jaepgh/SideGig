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

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
