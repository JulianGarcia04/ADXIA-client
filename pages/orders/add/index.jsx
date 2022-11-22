import React from 'react';
import Link from 'next/link';
import PrincipalLayout from '@/layout/PrincipalLayout';
import NavBar from '@/components/NavBar/NavBar';
import { User, Plus } from 'react-feather';
import style from './add.module.scss';
import ButtonsNavBar from '~/components/ButtonsNavBar/ButtonsNavBar';
import ProductCard from '~/components/ProductCard/ProductCard';

function Index() {
  return (
    <PrincipalLayout title={'Agregar pedido'} className={style.layout}>
        <Link href={'/orders/add/client'}>
          <div className={style.addClientCard}>
            <div className={style.iconContainer}>
              <User color='#ffff' width={30} height={30}/>
            </div>
            <div className={style.infoContainer}>
              <h3>Seleccionar cliente</h3>
              <span>Debes seleccionar un cliente para agregar un pedido</span>
            </div>
          </div>
        </Link>
        <div className={style.productBastket}>
          <h1>Cesta de productos</h1>
          <div className={style.productList}>
            <Link href={'/orders/add/product'}>
              <div className={style.addProduct}>
                <Plus color='#01237A' width={75} height={75}/>
                <span>Agregar producto</span>
              </div>
            </Link>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
        <NavBar>
          <div className={style.navBarContainer}>
            <div className={style.infoOrder}>
              <span>Total</span>
              <h1>$25.000</h1>
            </div>
            <ButtonsNavBar type={'submit'} title={'Agregar'} height={'45%'}/>
          </div>
        </NavBar>
    </PrincipalLayout>
  )
}

export default Index