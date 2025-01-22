import axios from "axios";

const BASE_URL = "https://6693a770c6be000fa07cccff.mockapi.io/api/v1/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.timeout = 25000;

export default axiosInstance;
