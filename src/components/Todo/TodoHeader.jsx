import styles from "./TodoHeader.module.scss";
import { getFormattedDate } from "../../utils/DateUtils";
import { Button } from "../Common/Button";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { useState } from "react";
// import { func } from "prop-types";

export function TodoHeader({ title, onTodoSort }) {
  const [buttonIndex, setButtonIndex] = useState(0);
  return (
    <div className={styles.header}>
      {/* STATUS-BAR */}
      <div className={styles.header__status__bar}>
        <h1>{title}</h1>
        <p>{getFormattedDate(Date.now())}</p>
      </div>

      {/* CONTROL BAR */}
      <div className={styles.header__control__bar}>
        <Button
          text="status"
          active={buttonIndex === 0 ? true : false}
          onClickFN={() => {
            setButtonIndex(0);
            onTodoSort("sortStatus");
          }}
        />
        <Button
          text="date"
          active={buttonIndex === 1 ? true : false}
          onClickFN={() => {
            setButtonIndex(1);
            onTodoSort("sortDate");
          }}
        />
        <Button
          text="task"
          active={buttonIndex === 2 ? true : false}
          onClickFN={() => {
            setButtonIndex(2);
            onTodoSort("sortTask");
          }}
        />
        <span
          onClick={() => {
            onTodoSort("reverseSort");
          }}
          className={styles.control__bar__icon}
        >
          <HiOutlineSwitchVertical />
        </span>
      </div>
    </div>
  );
}
