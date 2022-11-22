import React from "react";
import style from "./styles.module.scss";

function View({
  title,
  styles,
  onCancel,
  onClick,
  form,
  type,
}) {
  return (
    <div className={style.buttonsContainers} style={styles}>
      <button className={style.first} onClick={onCancel}>
        Cancelar
      </button>
      <button
        type={type}
        className={style.second}
        form={form}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default View;
