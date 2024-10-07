import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-beb1a/us-central1/api",
  // https://amazon-api-deploy-iu0y.onrender.com


});

export { axiosInstance };
 