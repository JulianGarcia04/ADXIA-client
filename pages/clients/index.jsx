import React from "react";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import ClientCard from "~/components/ClientCard/ClientCard";
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
        <ClientCard idClient={1} options/>
        <ClientCard idClient={2} options/>
        <ClientCard idClient={3} options/>
        <ClientCard idClient={4} options/>
      </div>
      {/*Navbar*/}
      <NavBar>
        <OptionsNavBar linkAdd={"/clients/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
