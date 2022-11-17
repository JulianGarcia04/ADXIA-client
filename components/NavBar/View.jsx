import React from 'react';
import style from './styles.module.scss';

function View({children}) {
  return (
    <div className={style.navBar}>
        {children}
    </div>
  )
}

export default View