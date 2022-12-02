import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import OptionsModalCard from "~/components/OptionsModalCard/OptionsModalCard";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import PersonCard from "~/components/PersonCard/PersonCard";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import { Shield, Edit3, Trash } from "react-feather";
import style from "./employees.module.scss";
import EmployeeCard from "~/components/EmployeeCard/EmployeeCard";

function Index() {
  return (
    <PrincipalLayout
      title={"Lista de empleados"}
      color={"#ffff"}
      className={style.searchHeader}
      header={<SearchInput placeholder={"Buscar empleado"} />}
    >
      <div className={style.containerEmployeesList}>
        <EmployeeCard idEmployee={1}/>
        <EmployeeCard idEmployee={2}/>
        <EmployeeCard idEmployee={3}/>
        <EmployeeCard idEmployee={4}/>
      </div>
      <NavBar>
        <OptionsNavBar linkAdd={"/employees/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
