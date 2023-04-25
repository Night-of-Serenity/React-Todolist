import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

export function TodoContent() {
  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader />
      {/* Add Todo */}
      <AddTodo />
      {/* TodoList */}
      <TodoList />
    </main>
  );
}
