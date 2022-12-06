import React from "react";
import { ErrorMessage } from "formik";
import styles from "./styles.module.scss";

function View({ title, name, value, id, cols, rows, onChange, onBlur }) {
  return (
    <label htmlFor={id} className={styles.textFieldContainer}>
      {title}
      <textarea
        name={name}
        value={value}
        id={id}
        cols={cols}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
      <ErrorMessage
        name={name}
        component={"div"}
        className={styles.ErrorMessage}
      />
    </label>
  );
}

export default View;
