import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import PersonCard from '../PersonCard/PersonCard';
import { MoreVertical } from 'react-feather';
import style from './styles.module.scss';

function View() {
  return (
    <div className={style.orderCard}>
      <div className={style.clientInfo}>
        <PersonCard/>
        <MoreVertical/>
      </div>
      <div className={style.sectionProduct}>
        <ProductCard border/>
        <ProductCard border/>
      </div>
      <button className={style.button}>Ver todo el pedido</button>
    </div>
  )
}

export default View