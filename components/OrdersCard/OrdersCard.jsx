import React from 'react'
import useModal from '~/hooks/useModal'
import View from './View'

function OrdersCard() {
  const {isOpen, showModal} = useModal();
  return (
    <View moreOption={showModal} stateModal={isOpen}/>
  )
}

export default OrdersCard