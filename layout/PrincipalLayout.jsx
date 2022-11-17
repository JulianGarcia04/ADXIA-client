import React from 'react';
import DefaultLayout from './DefaultLayout';

function PrincipalLayout({children}) {
  return (
    <DefaultLayout>
        {children}
    </DefaultLayout>
  )
}

export default PrincipalLayout