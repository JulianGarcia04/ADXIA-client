import React from 'react';
import PrincipalLayout from '~/layout/PrincipalLayout';
import PersonCard from '~/components/PersonCard/PersonCard';
import style from './styles.module.scss';

function Index() {
  return (
    <PrincipalLayout title={'Selecciona un cliente'}>
      <div className={style.clientList}>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
      </div>
    </PrincipalLayout>
  )
}

export default Index