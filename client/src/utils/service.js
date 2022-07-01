import axios from "axios";

const BASE_URL = "http://localhost:5000/user";

const service = {
  userAPI: (data) => {
    return axios.post(BASE_URL + "/register", data);
  },

  loginAPI: (data) => {
    return axios.post(BASE_URL + "/login", data);
  },
};

export default service;
