import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./styles.module.scss";

export default function View({ type, name, title, id, disabled, readOnly }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{title}</label>
      <Field
        type={type}
        name={name}
        id={id}
        className={styles.input}
        disabled={disabled}
        readOnly={readOnly}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={styles.ErrorMessage}
      />
    </div>
  );
}
