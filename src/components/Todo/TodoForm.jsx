import styles from "./TodoForm.module.scss";

export function TodoForm() {
  return (
    <form className={styles.todo__form__container}>
      <input className={styles.todo__form__input} placeholder="Task Name" />
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>Title is required</p>
        <div className={styles.todo__form__buttons}>
          <button>Cancel</button>
          <button>Add Task</button>
        </div>
      </div>
    </form>
  );
}
