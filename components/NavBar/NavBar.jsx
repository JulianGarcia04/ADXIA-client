import React from 'react'
import View from './View'

function NavBar({children, acomodate}) {
  return (
    <View acomodate={acomodate}>
        {children}
    </View>
  )
}

export default NavBar