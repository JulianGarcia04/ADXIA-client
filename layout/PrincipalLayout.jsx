import React from 'react';
import {useRouter} from 'next/router';
import DefaultLayout from './DefaultLayout';
import { ArrowLeft } from 'react-feather';

function PrincipalLayout({children, title, className, header}) {

  const router = useRouter();

  return (
    <DefaultLayout className="default">
        <header className={'headerContainer ' + className}>
            <div className='infoContainer'>
                <ArrowLeft width={40} height={40} onClick={()=>router.back()}/>
                <h1>{title}</h1>
                {header}
            </div>
        </header>
        {children}
    </DefaultLayout>
  )
}

export default PrincipalLayout