import instance from "./axios.js";

export const userLogin = (data) => {
  return instance.post("/login", data);
};

export const userSignup = (data) => {
  return instance.post("/register", data);
};
