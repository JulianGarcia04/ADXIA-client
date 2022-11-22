import React from 'react';
import {useRouter} from 'next/router';
import DefaultLayout from './DefaultLayout';
import { ArrowLeft } from 'react-feather';

function PrincipalLayout({children, title, className, header, color}) {

  const router = useRouter();

  const style = {
    color
  }

  return (
    <DefaultLayout className="default">
        <header className={'headerContainer ' + className}>
            <div className='infoContainer'>
                <ArrowLeft color={color} width={32} height={32} onClick={()=>router.back()}/>
                <h1 style={style}>{title}</h1>
            </div>
            {header}
        </header>
        {children}
    </DefaultLayout>
  )
}

export default PrincipalLayout