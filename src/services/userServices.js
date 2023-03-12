import instance from "./axios.js";

export const editNote = (data) => {
  return instance.post("/login", data);
};

export const deleteNote = (data) => {
  return instance.post("/register", data);
};
