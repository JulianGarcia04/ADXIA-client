import React from 'react';
import View from './View';

function EmployeeCard({idEmployee, img, name, position}) {
  return (
    <View idEmployee={idEmployee} img={img} name={name} position={position}/>
  )
}

export default EmployeeCard;