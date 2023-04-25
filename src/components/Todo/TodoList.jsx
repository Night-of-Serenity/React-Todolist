import { TodoItem } from "./TodoItem";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem key={todoObj.id} todo={todoObj} />
      ))}
    </ul>
  );
}
