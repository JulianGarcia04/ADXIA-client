import React from "react";
import {getEmployees} from '~/modules/employees/services';
import NavBar from "~/components/NavBar/NavBar";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import style from "./employees.module.scss";
import EmployeeCard from "~/components/EmployeeCard/EmployeeCard";

export async function getServerSideProps({req}){

  const token = req.cookies.auth;
  const data = getEmployees()

  return {
    prop:{

    }
  }
}

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
