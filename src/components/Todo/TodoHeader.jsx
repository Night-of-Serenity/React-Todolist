import styles from "./TodoHeader.module.scss";
import { getFormattedDate } from "../../utils/DateUtils";

export function TodoHeader({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <p>{getFormattedDate(Date.now())}</p>
    </div>
  );
}
