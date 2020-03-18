import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth/"
});

//로그인
export const login = ({ email, password }) =>
  api.post("login", { email, password });

//회원가입
export const register = ({ email, password }) =>
  api.post("register", { email, password });

//로그인 상태 확인
export const check = () => api.get("check");
