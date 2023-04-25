# FOR UI TASK

# Hello Everyone

# TASK-1 : Create Project by using CRA

- `mkdir todo-list`
- `cd todo-list`
- `npx create-react-app .`
- `npm start`

or

- `npx create-react-app todo-list`
- `cd todo-list`
- `npm start`

# TASK-2 : Clean up Project - remove unnecessary thing

- clean up index.js
- clean up App.js, App.css
- clean up public/index.html
- remove unnecessary file
- restructure folder to app/ component/

# TASK-3 : Create-UI : APP and Layout

# TASk-4 : Create-UI : TODO

## 1.todo-header

```js
export function TodoHeader() {
  let today = new Date();
  let options = { weekday: "short", day: "numeric", month: "short" };

  return (
    <div className={styles.header}>
      <h1>Inbox</h1>
      <span>{today.toLocaleDateString("en-US", options)}</span>
    </div>
  );
}
```

```scss
.header {
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 10px;

  & > h1 {
    font-size: 24px;
  }
  & > span {
    font-size: 12px;
    color: grey;
  }
}
```

## 2.add-todo

```js
<div className="add__todo">
  <span>+</span>
  <h3>Add task</h3>
</div>
```

```scss
.container {
  margin-bottom: 10px;
}

.add__todo {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  // ทำวงกลมของปุ่ม +
  & > span {
    font-size: 24px;
    line-height: 22px;
    text-align: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }

  & > h3 {
    color: grey;
    font-weight: 500;
    font-size: 16px;
    line-height: 12px;
  }

  // Hover : สลับสี
  &:hover {
    & > span {
      background-color: #db4c3f;
      color: white;
    }
    & > h3 {
      color: #db4c3f;
    }
  }
}
```

## 3.Todo-form

```js
<form className="todo__form__container">
  <input className="todo__form__input" placeholder="Task Name" />
  <div className="todo__form__footer">
    <p className="todo__error">Title is required</p>
    <div className="todo__form__buttons">
      <button>Cancel</button>
      <button>Add Task</button>
    </div>
  </div>
</form>
```

```scss
.todo__form__container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  // background-color: rgb(209, 209, 209);
  border-radius: 8px;
  gap: 10px;
  border: 1px solid rgb(220, 220, 220);
}

.todo__form__input {
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  width: 100%;
  font-size: 14px;

  &:focus {
    outline: none;
  }
}

.todo__form__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo__error {
  justify-self: start;
  padding: 10px;
  font-size: 10px;
  font-weight: 800;
  color: #db4c3f;
}
.todo__form__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;

  & > button {
    border: none;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
  }

  & > button:last-child {
    background-color: #db4c3f;
    color: white;
  }
}
```

## 4.เอา add todo กับ TodoForm ไป condition render

## 5. TodoItem

```js
<li className="todo__item__container">
  <div className="checkbox__container">
    <HiCheck className="checkbox__icon" />
  </div>
  <p className="done">item-1</p>

  <div className="edit__icon">
    <HiPencil />
  </div>

  <div className="delete__icon">
    <HiTrash />
  </div>
</li>
```

```scss
$grey: rgb(234, 234, 234);

.todo__item__container {
  cursor: pointer;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;

  & > p {
    flex: 1;
  }

  &:hover {
    background-color: $grey;
  }
}

.checkbox__container {
  border-color: gray;
  color: #343434;
  height: 16px;
  width: 16px;
  display: block;
  border: 1px solid gray;
  border-radius: 16px;
  text-align: center;
  line-height: 16px;
}
.checkbox__icon {
  display: none;
  font-size: 12px;
}

.checkbox__icon__done {
  display: inline;
  font-size: 12px;
}

// effect ติ้กถูกตอน hover ที่ <li>
.checkbox__container:hover {
  .checkbox__icon {
    display: inline;
  }
}

.edit__icon,
.delete__icon {
  color: gray;
  display: flex;
  align-items: center;
  font-size: 18px;

  & :hover {
    color: #343434;
  }
}

.done {
  text-decoration: line-through;
}
```

## 6. เอา Todo form ไป toggle

## 7. Refractor เป็น JSX Component, SCSS Module

```js
// TodoContent.jsx
import { TodoHeader } from "./TodoHeader";
import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";

export function TodoContent() {
  return (
    <main className="content">
      <TodoHeader />
      <AddTodo />
      <TodoLists />
    </main>
  );
}
```

```js
// AddTodo.jsx
import { useState } from "react";
import styles from "./AddTodo.module.scss";
import { TodoForm } from "./TodoForm";
export function AddTodo() {
  const [addMode, setAddMode] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleClickAdd = () => setAddMode(true);
  const handleClickCancel = () => {
    // setNewTodo('')
    setAddMode(false);
  };
  const handleClickAddTodo = (e) => {
    e.preventDefault();
    setAddMode(false);
  };

  const handleChangeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className={styles.container}>
      {!addMode ? (
        <div className={styles.add__todo} onClick={handleClickAdd}>
          <span>+</span>
          <h3>Add task</h3>
        </div>
      ) : (
        <TodoForm
          task={newTodo}
          textConfirm="Add task"
          onChange={handleChangeTodo}
          onclickConfirm={handleClickAddTodo}
          onClickCancel={handleClickCancel}
        />
      )}
    </div>
  );
}
```

```js
// TodoForm.jsx
import styles from "./TodoForm.module.scss";

export function TodoForm({ task, onChange, textConfirm, onclickConfirm, onClickCancel }) {
  return (
    <form className={styles.todo__form__container}>
      <input className={styles.todo__form__input} placeholder="Task Name" value={task} onChange={onChange} />
      <div className={styles.todo__form__buttons}>
        <button onClick={onClickCancel}>Cancel</button>
        <button onClick={onclickConfirm}>{textConfirm}</button>
      </div>
    </form>
  );
}
```

## 8.ทำส่วน Todolist

```js
// TodoLists.jsx
import styles from "./TodoLists.module.scss";
import mockTodo from "../../data/todo.json";
import { TodoItem } from "./TodoItem";

export function TodoLists() {
  return (
    <ul className={styles.todoList}>
      {mockTodo.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
```

```js
// TodoItem
import styles from "./TodoItem.module.scss";

import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";

export function TodoItem({ item }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => setIsEdit(true);
  const onClickConfirm = () => {
    setIsEdit(false);
  };
  const onClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container} key={item.id}>
          <div className={styles.checkbox__container}>
            <HiCheck className={`${item.status ? styles.checkbox__icon__done : styles.checkbox__icon}`} />
          </div>
          <p className={`${item.status && styles.done}`}>{item.task}</p>

          <div className={styles.edit__icon} onClick={handleClickEdit}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm task={item.task} textConfirm="Edit task" onclickConfirm={onClickConfirm} onClickCancel={onClickCancel} />
      )}
    </>
  );
}
```

## 9.ทำ CRUD

## 10.ทำ Date

```css
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
input[type="date"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  // border: none;
  outline: none;
}
```
