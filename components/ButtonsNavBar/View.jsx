import React from "react";
import style from './styles.module.scss';

function View({first, second, styles}) {
  return (
    <div className={style.buttonsContainers} style={styles}>
      <button className={style.first}>{first}</button>
      <button className={style.second}>{second}</button>
    </div>
  );
}

export default View;
