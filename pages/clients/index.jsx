import React from "react";
import { useIsFetching, useQueryClient } from "react-query";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import style from "./clients.module.scss";
import { Clients } from "~/components/Clients/Clients";
import { ClientsSkeleton } from "~/components/ClientsSkeleton/ClientsSkeleton";
import { useSearch } from "~/contexts/searchContext";

function Index() {
  const isFetchingClients = useIsFetching(["clients"]);

  const queryClient = useQueryClient();

  const { resetSearch, setSearchValue } = useSearch();

  React.useEffect(()=> {
    resetSearch();

    queryClient.invalidateQueries("clients");
  }, []);

  return (
    //header
    <PrincipalLayout
      title={"Lista de clientes"}
      className={style.searchHeader}
      color={"#ffff"}
      header={
        <SearchInput 
          placeholder={"Buscar pedido"} 
          onSearchValue={(searchValue)=> {
            setSearchValue(searchValue);
            queryClient.invalidateQueries("clients");
          }}/>
      }
    >
      {isFetchingClients ? <ClientsSkeleton/> : <Clients/>}  
      <NavBar>
        <OptionsNavBar linkAdd={"/clients/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
