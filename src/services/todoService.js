import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const deleteTodoAPI = (todoId) => axios.delete(`/todos/${todoId}`);
export const getTodosAllAPI = () => axios.get("/todos");
export const updateTodoAPI = (oldtodoId, todoRequestObj) => axios.put(`/todos/${oldtodoId}`, todoRequestObj);
export const createTodoAPI = (todoObj) => axios.post("/todos", todoObj);
// let response = await axios.post("http://localhost:8080/todos", todoObj);
