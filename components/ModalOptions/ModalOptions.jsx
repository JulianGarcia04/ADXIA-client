import React from 'react';
import View from './View';

function ModalOptions({changeStateModal, children}) {

  return <View onClickBackground={changeStateModal}>
    {children}
  </View>
}

export default ModalOptions