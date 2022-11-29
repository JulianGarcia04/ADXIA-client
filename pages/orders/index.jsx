import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import style from "./orders.module.scss";
import OrdersCard from "~/components/OrdersCard/OrdersCard";

function index() {
  return (
    <PrincipalLayout
      title={"Lista de pedidos"}
      className={style.searchHeader}
      color={"#ffff"}
      header={<SearchInput placeholder={"Buscar pedido"} />}
    >
      <div className={style.ordersList}>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
        <OrdersCard/>
      </div>
      <NavBar>
        <OptionsNavBar linkAdd={'/orders/add'}/>
      </NavBar>
    </PrincipalLayout>
  );
}

export default index;
