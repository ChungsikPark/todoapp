import axios from "axios";

const API = "http://34.66.61.31:8000";

const createTodo = async (action) => {
  const response = await axios({
    url: `${API}/todo/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      content: action.payload.text,
    },
  });
  const responseOK =
    response && response.status === 201 && response.statusText === "OK";
  const addedTodo = responseOK ? response.data : {};
  return addedTodo;
};

const toggleTodo = async (action) => {
  const response = await axios({
    url: `${API}/todo/${action.payload.id}/`,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      content: action.toggledTodo,
    },
  });
  const responseOK =
    response && response.status === 200 && response.statusText === "OK";
  const toggledTodo = responseOK ? response.data : {};
  return toggledTodo;
};

const deleteTodo = async (action) => {
  const response = await axios({
    url: `${API}/todo/${action.payload.id}/`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.status === 204;
};

const updateTodo = async (action) => {
  const response = await axios({
    url: `${API}/${action.payload.id}/`,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      content: action.payload.text,
    },
  });
  const responseOK =
    response && response.status === 200 && response.statusText === "OK";
  const updatedTodo = responseOK ? response.data : {};
  return updatedTodo;
};

const getTodo = async () => {
  const response = await axios({
    url: `${API}/todo/`,
    method: "GET",
  });
  const responseOK =
    response && response.status === 200 && response.statusText === "OK";
  const gotTodo = responseOK ? response.data : {};
  return gotTodo;
};

export const Api = {
  createTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  getTodo,
};
