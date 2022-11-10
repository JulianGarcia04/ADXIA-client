import React, {useId} from 'react'
import View from './View'

function TextField({type, name, title}) {
  const id = useId();
  return (
    <View type={type} name={name} title={title} id={`${id}-${name}`}/>
  )
}

export default TextField