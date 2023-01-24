import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = async () => {
  const response = await axios.get(`${base_url}user/logout`);
  if (response.data) {
    localStorage.removeItem("user");
    window.location.pathname('/');
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);

  return response.data;
};

const authService = {
  login,
  logout,
  getOrders,
};

export default authService;
