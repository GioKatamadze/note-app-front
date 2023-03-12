import instance from "./axios.js";

export const getNotes = () => {
  return instance.get("/notes");
};

export const getSingleNote = (id) => {
  return instance.get("/notes/" + id);
};

export const addNote = (data) => {
  return instance.post("/notes", data);
};

export const editNote = (id, data) => {
  return instance.get("/notes/" + id, data);
};

export const deleteNote = (id) => {
  return instance.delete("/notes/" + id);
};
