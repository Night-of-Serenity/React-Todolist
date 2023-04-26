import styles from "./TodoForm.module.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  submitText: PropTypes.string.isRequired,
  onSetIsShowForm: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  todo: PropTypes.oneOfType([PropTypes.object]), // undefined(type undefined ใส่โดยไม่ต้องใส่) , {id : number | string , task : string, status : bool, due_date:string}
};

export function TodoForm({ submitText, onSetIsShowForm, todo, onAddTodo, onEditTodo }) {
  // # 1 : Logic Section
  const [task, setTask] = useState(todo?.task || "");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    if (task.trim() === "") {
      setIsError(true);
      return;
    }

    // validate passed , execute addTodo
    // onAddTodo(task) // from <TodoContent/>
    if (todo) onEditTodo(todo.id, { task }); // send => 1.newTask 2. todoId
    else onAddTodo(task);

    onSetIsShowForm?.(false);
  };
  const handleClickCancel = (e) => {
    onSetIsShowForm?.(false);
  };

  const handleChangeInput = (e) => {
    setIsError(false);
    setTask(e.target.value);
  };

  // # 2 : UI-Section
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input className={styles.todo__form__input} placeholder="Task Name" value={task} onChange={handleChangeInput} />
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Title is required</p>}
        <div className={styles.todo__form__buttons}>
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
          <button type="submit">{submitText}</button>
        </div>
      </div>
    </form>
  );
}
