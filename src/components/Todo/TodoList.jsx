import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onEditTodo, onDeleteTodo }) {
  // console.log("todolist run");
  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
