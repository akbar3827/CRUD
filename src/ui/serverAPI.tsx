import axios from "axios";

export const ServerDataUser = axios.create({
  baseURL: "http://localhost:2000",
});
