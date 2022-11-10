import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./styles.module.scss";

export default function View({ type, name, title, id }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{title}</label>
      <Field
        type={type}
        name={name}
        id={id}
        className={styles.input}
      />
      <ErrorMessage
        name={name}
        component="div"
        className={styles.ErrorMessage}
      />
    </div>
  );
}
