import React from 'react';
import styles from './styles.module.scss';

function View({onClickBackground, children}) {
  return (
    <div className={styles.backgroundModal} onClick={onClickBackground}>
        <div className={styles.preContainer}>
            <div className={styles.modalOptionsContainer}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default View