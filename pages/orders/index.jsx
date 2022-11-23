import React from "react";
import Link from "next/link";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import { Plus } from "react-feather";
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
        <div className={style.navBar}>
          <Link href={"/orders/add"}>
            <div className={style.add}>
              <Plus color="white" />
            </div>
          </Link>
        </div>
      </NavBar>
    </PrincipalLayout>
  );
}

export default index;
