import React from 'react';
import PrincipalLayout from '~/layout/PrincipalLayout';
import PersonCard from '~/components/PersonCard/PersonCard';
import style from './styles.module.scss';
import ClientCard from '~/components/ClientCard/ClientCard';

function Index() {
  return (
    <PrincipalLayout title={'Selecciona un cliente'}>
      <div className={style.clientList}>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </PrincipalLayout>
  )
}

export default Index