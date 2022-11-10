import React from "react";
import Image from 'next/image';
import style from './styles.module.scss';
import figureBackground from "../../assets/images/Group.svg";

function View({coordinates}) {
  return (
    <div className={style.figureBackground} style={coordinates}>
      <Image
        src={figureBackground}
        alt="Figure Image Background"
        className={style.figureBackground}
      />
    </div>
  );
}

export default View;
