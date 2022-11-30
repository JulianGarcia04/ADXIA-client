import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import PersonCard from "~/components/PersonCard/PersonCard";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import style from "./employees.module.scss";

function Index() {
  return (
    <PrincipalLayout
      title={"Lista de empleados"}
      color={"#ffff"}
      className={style.searchHeader}
      header={<SearchInput placeholder={"Buscar empleado"} />}
    >
      <div className={style.containerEmployeesList}>
        <PersonCard options employee idPerson={1}/>
        <PersonCard options employee idPerson={2}/>
        <PersonCard options employee idPerson={3}/>
        <PersonCard options employee idPerson={4}/>
      </div>
      <NavBar>
        <OptionsNavBar linkAdd={'/employees/add'}/>
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
