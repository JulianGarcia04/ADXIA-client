import React from 'react'
import View from './View'

function FigureBackground({top, right, bottom, left}) {
    const coordinates = {
        top,
        right,
        bottom,
        left
    }
  return (
    <View coordinates={coordinates}/>
  )
}

export default FigureBackground