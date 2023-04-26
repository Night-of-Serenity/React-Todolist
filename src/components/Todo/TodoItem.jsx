import styles from "./TodoItem.module.scss";
import { useState } from "react";
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { TodoForm } from "./TodoForm";

export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  // console.log("item run", todo);
  // #1 : Logic,State
  // Check ==> done ==> todo.status = true
  // const [isCheck, setIsCheck] = useState(todo.status);
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleCheck = () => {
    // setIsCheck(!isCheck);
    onEditTodo(todo.id, { status: !todo.status });
    console.log(!todo.status);
  };
  const handleDelete = () => {
    // console.log("delete");
    onDeleteTodo(todo.id);
  };

  const handleOpenEditMode = () => {
    setIsEdit(true);
  };

  let CheckboxStyle = todo.status ? styles.checkbox__icon_done : styles.checkbox__icon;
  let taskStyle = todo.status ? styles.done : "";

  // #2 : render
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container}>
          <div className={styles.checkbox__container} onClick={handleToggleCheck}>
            <HiCheck className={CheckboxStyle} />
          </div>
          <p className={taskStyle}>{todo.task}</p>

          <div className={styles.edit__icon} onClick={handleOpenEditMode}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon} onClick={handleDelete}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm submitText={"Edit Task"} onSetIsShowForm={setIsEdit} todo={todo} onEditTodo={onEditTodo} />
      )}
    </>
  );
}
