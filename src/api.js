import axios from "axios";

const API = axios.create({
  baseURL: "https://crudcrud.com/api/4a7a63c3f67e44ebaaf1ef0c239d1a9d/students",
});
export default API;
