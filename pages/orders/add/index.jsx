import React from 'react';
import PrincipalLayout from '@/layout/PrincipalLayout';
import NavBar from '@/components/NavBar/NavBar';
import style from './add.module.scss';

function index() {
  return (
    <PrincipalLayout title={'Agregar pedido'} className={style.layout}>
        
    </PrincipalLayout>
  )
}

export default index