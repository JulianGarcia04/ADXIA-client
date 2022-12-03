import React from 'react';
import styles from './styles.module.scss';

function View({title, type, form, disabled, onClick}) {
  return (
    <button type={type} form={form} disabled={disabled} className={styles.button} onClick={onClick}>
        {title}
    </button>
  )
}

export default View;