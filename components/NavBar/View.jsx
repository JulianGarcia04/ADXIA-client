import React from 'react';
import style from './styles.module.scss';

function View({children, acomodate}) {
  return (
    <div className={style.container}>
      <div className={style.navBar}>
          {children}
      </div>
    </div>
  )
}

export default View