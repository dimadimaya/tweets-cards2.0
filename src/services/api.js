import axios from "axios";

axios.defaults.baseURL = "https://63cf079210982404377a7c3f.mockapi.io";

export const getUsers = ({ params }) => axios.get("/users", { params });
