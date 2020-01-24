import axios from "axios";

export default {
  // Gets all books
  getAllProducts: function() {
    return axios.get("/api/products");
  },

  getPopItems: function() {
    return axios.get("/api/products/pop");
  },


  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },

  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Gets the book with the given id
  updateProduct: function(id, value) {
    return axios.put("/api/products/", id, value);
  },

  grabCart: function() {
    return axios.get("/api/products/cart");
  },

  apiSearch: function(term) {
    return axios.get(`/api/products?q=${term}`);
  },


  logUserIn: function(data) {
    return axios.post(`/api/users/login`, data);
  },

  createUser: function(data) {
    console.log(data)
    return axios.post(`/api/users/signup`, data);
  },
};
