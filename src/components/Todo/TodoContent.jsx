import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

import { v4 as uuidv4 } from "uuid";

export function TodoContent({ todos, setTodos }) {
  // Logic

  // Handdle Add Todo
  const handleAddTodo = (newTask) => {
    // new todo
    let newTodoObj = { id: uuidv4(), task: newTask, status: false, due_date: "" };

    // Create new state
    // const newTodo = [newTodoObj, ...todos];
    // Update new state
    // setTodos(newTodo);

    // update state โดย callback
    setTodos((currentState) => [newTodoObj, ...currentState]);
  };

  // Edit todo
  const handleEditTodo = (todoId, updateObj) => {
    // console.log("##", todoId, newTask);

    // Modify Array
    // #1 FindIndex
    const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
    // Not founded
    if (foundedIndex == -1) return;
    // Founded
    const newTodos = [...todos];
    newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj };
    // { "id": 4, "task": "In congue. Etiam justo.", "status": false, "due_date": "2023-05-04" },
    setTodos(newTodos);

    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    // const foundIndex = todos.findIndex((todoObj) => todoObj.id === id);
    // if (foundIndex === -1) return;
    // const newTodos = [...todos];
    // newTodos.splice(foundIndex, 1);
    // setTodos(newTodos);
    setTodos((currentState) => currentState.filter((todoObj) => todoObj.id !== id));
  };

  // console.log("content run");

  // Render UI
  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader title="Inbox" />
      {/* Add Todo */}
      <AddTodo onAddTodo={handleAddTodo} />
      {/* TodoList */}
      <TodoList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDelete} />
    </main>
  );
}
