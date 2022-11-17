import React from 'react';
import View from './View';

function ProductCard({border}) {
  const styles = {
    border: '1px solid #E5E5EE',
    borderRadius: 10,
    padding: '10px 0px'
  }
  return (
    <View styles={border?styles:{}}/>
  )
}

export default ProductCard