import React from "react";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PersonCard from "~/components/PersonCard/PersonCard";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import style from "./clients.module.scss";

function Index() {
  return (
    //header
    <PrincipalLayout
      title={"Lista de clientes"}
      className={style.searchHeader}
      color={"#ffff"}
      header={<SearchInput placeholder={"Buscar pedido"} />}
    >
        <div className={style.containerClientList}>
            <PersonCard options idPerson={1}/>
            <PersonCard options idPerson={2}/>
            <PersonCard options idPerson={3}/>
            <PersonCard options idPerson={4}/>
        </div>
        {/*Navbar*/}
        <NavBar>
          <OptionsNavBar linkAdd={'/clients/add'}/>
        </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
