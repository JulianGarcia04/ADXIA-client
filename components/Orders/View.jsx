import React from "react";
import styles from './styles.module.scss';
import OrdersCard from "~/components/OrdersCard/OrdersCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";

function View({ orders }) {
  return (
    <div className={styles.orders}>
      {(orders && orders.length === 0) ? 
      <NothingMessage message="No hay pedidos"/> : null}
      {orders ? orders.map((order)=> (
        <OrdersCard key={order.id} orderData={order} options/>      
      )): null}
    </div>
  )
}

export default View;
