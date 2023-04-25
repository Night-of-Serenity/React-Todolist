import styles from "./TodoForm.module.scss";
import React, { useState } from "react";

export function TodoForm({ submitText, onSetIsShowForm, oldTask }) {
  // # 1 : Logic Section
  const [task, setTask] = useState(oldTask || "");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    if (task.trim() === "") {
      setIsError(true);
      return;
    }

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
