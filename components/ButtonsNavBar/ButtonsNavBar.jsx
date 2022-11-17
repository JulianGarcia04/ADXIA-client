import React from 'react';
import View from './View';

function ButtonsNavBar({first, second, height}) {
    const styles = {
        height
    }
  return (
    <View first={first} second={second} styles={styles}/>
  )
}

export default ButtonsNavBar