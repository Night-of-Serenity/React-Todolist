import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import mockData from "../../data/todos.json";
import { useState } from "react";

export function TodoContent() {
  // Logic
  const [todos, setTodos] = useState(mockData);
  console.log(todos);

  // Render UI
  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader />
      {/* Add Todo */}
      <AddTodo />
      {/* TodoList */}
      <TodoList todos={todos} />
    </main>
  );
}
