import axios from "axios";
const token = localStorage.getItem("token");
const noteApi = axios.create({
  baseURL: "https://boiling-mesa-88989.herokuapp.com/",
  headers: { authtoken: token },
});

export const viewNotesApi = async () => {
  console.log(token);
  const response = await noteApi.get("api/viewnotes");
  console.log(response.data);
  return response.data;
};

export const addNoteApi = async (note) => {
  const response = await noteApi.post("/api/addnote", note, {
    header: { authtoken: token },
  });
  return response;
};

export const updateNoteApi = async (note) => {
  const response = await noteApi.patch("/api/updatenote", note, {
    header: { authtoken: token },
  });
  return response;
};

export const deleteNoteApi = async (noteid) => {
  const response = await noteApi.delete(`/api/deletenote/${noteid}`,{
    header: { authtoken: token },
  });
  return response;
};
