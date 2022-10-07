import axios from "axios";
const token = localStorage.getItem("token");
const expenseApi = axios.create({
  baseURL: "https://boiling-mesa-88989.herokuapp.com/",
  headers: { authtoken: token },
});

export const viewExpenseApi = async () => {
  console.log(token);
  const response = await expenseApi.get("api/viewexpense");
  console.log(response.data);
  return response.data;
};

export const addExpenseApi = async (expense) => {
  const response = await expenseApi.post("/api/addexpense", expense, {
    header: { authtoken: token },
  });
  return response;
};

export const updateExpenseApi = async (expense) => {
  const response = await expenseApi.patch("/api/updateexpense", expense, {
    header: { authtoken: token },
  });
  return response;
};

export const deleteExpenseApi = async (id) => {
  const response = await expenseApi.delete(`/api/deleteexpense/${id}`, {
    header: { authtoken: token },
  });
  return response;
};
