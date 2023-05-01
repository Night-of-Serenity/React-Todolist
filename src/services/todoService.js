import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const deleteTodoAPI = async (todoId) => await axios.delete(`/todos/${todoId}`);
export const getTodosAllAPI = async () => await axios.get("/todos");
export const updateTodoAPI = async (oldtodoId, todoRequestObj) => await axios.put(`/todos/${oldtodoId}`, todoRequestObj);
export const createTodoAPI = async (todoObj) => await axios.post("/todos", todoObj);
// let response = await axios.post("http://localhost:8080/todos", todoObj);
