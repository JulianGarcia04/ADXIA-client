import React from 'react';
import DefaultLayout from './DefaultLayout';
import { ArrowLeft } from 'react-feather';

function PrincipalLayout({children, title, className, header}) {
  return (
    <DefaultLayout>
        <header className={'headerContainer ' + className}>
            <div className='infoContainer'>
                <ArrowLeft width={40} height={40}/>
                <h1>{title}</h1>
                {header}
            </div>
        </header>
        {children}
    </DefaultLayout>
  )
}

export default PrincipalLayout