import axios from "axios";

const baseUrl = axios.create({
  baseURL: '/api/',
})

export default baseUrl;