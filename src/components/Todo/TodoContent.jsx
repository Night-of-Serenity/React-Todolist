import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import mockData from "../../data/todos.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoContent() {
  // Logic
  const [todos, setTodos] = useState(mockData);

  // Handdle Add Todo
  const handleAddTodo = () => {
    // new todo
    let newTodoObj = { id: uuidv4(), task: "new todo task", status: false, due_date: "" };

    // Create new state
    // const newTodo = [newTodoObj, ...todos];
    // Update new state
    // setTodos(newTodo);q

    // update state โดย callback
    setTodos((currentState) => [newTodoObj, ...currentState]);
  };

  // Render UI
  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader />
      {/* Add Todo */}
      <AddTodo />
      <button onClick={handleAddTodo}>Test add todo</button>
      {/* TodoList */}
      <TodoList todos={todos} />
    </main>
  );
}
