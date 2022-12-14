import React from "react";
import { useIsFetching, useQueryClient } from 'react-query';
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import style from "./orders.module.scss";
import { Orders } from "~/components/Orders/Orders";
import OrdersSkeleton from "~/components/OrdersSkeleton/OrdersSkeleton";
import { useOrder } from "~/contexts/orderContext";
import { useSearch } from "~/contexts/searchContext";

function index() {
  const { resetState } = useOrder();

  const queryClient = useQueryClient();

  const { resetSearch, setSearchValue } = useSearch();

  const isFetchingOrders = useIsFetching(["orders"]);

  React.useEffect(()=> { 
    resetState();
    resetSearch();
    queryClient.invalidateQueries("orders");
  }, []);

  return (
    <PrincipalLayout
      title={"Lista de pedidos"}
      className={style.searchHeader}
      color={"#ffff"}
      backHref="/home"
      header={
      <SearchInput 
        placeholder={"Buscar pedido"}
        onSearchValue={(searchValue)=> {
          setSearchValue(searchValue);
          queryClient.invalidateQueries("orders");
        }} 
      />
    }
    >
      <div className={style.ordersList}>
        {isFetchingOrders ? <OrdersSkeleton/> : <Orders/>}
      </div>
      <NavBar>
        <OptionsNavBar linkAdd={'/orders/add'}/>
      </NavBar>
    </PrincipalLayout>
  );
}

export default index;
