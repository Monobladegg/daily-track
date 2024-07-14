import axios from "axios";
import { IRegisterForm, ILoginForm } from "../types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

export const authAPI = {
  async register({email, username, password}: IRegisterForm) {
    const response = await instance.post("/auth/register", {
      email,
      username,
      password
    })
    localStorage.setItem("token", response.data.token);
    return {
      data: response.data,
      status: response.status
    }
  },

  async login({email, password}: ILoginForm) {
    const response = await instance.post("/auth/login", {
      email,
      password
    })
    localStorage.setItem("token", response.data.token);
    return {
      data: response.data,
      status: response.status
    }
  },

  async me() {
    const response = await instance.get("/auth/me")
    return {
      data: response.data,
      status: response.status
    }
  }
}