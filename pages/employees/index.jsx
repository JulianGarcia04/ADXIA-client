import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import style from "./employees.module.scss";
import { Employees } from "~/components/Employees/Employees";
import { useIsFetching, useQueryClient } from "react-query";
import { EmployeesSkeleton } from "~/components/EmployeesSkeleton/EmployeesSkeleton";
import { useSearch } from "~/contexts/searchContext";
import queryClient from "~/query/queryClient";

function Index() {
  const isFetchingEmployees = useIsFetching(["employees"]);

  const queryClient = useQueryClient();

  const { resetSearch, setSearchValue } = useSearch();

  React.useEffect(()=> {
    resetSearch();

    queryClient.invalidateQueries("employees");
  }, []);

  return (
    <PrincipalLayout
      title={"Lista de empleados"}
      color={"#ffff"}
      className={style.searchHeader}
      header={
        <SearchInput 
          placeholder={"Buscar empleado"} 
          onSearchValue={(searchValue)=> {
            setSearchValue(searchValue);
            queryClient.invalidateQueries("employees");
          }}
      />}
    >
      {isFetchingEmployees ? <EmployeesSkeleton/> : <Employees/>}
      <NavBar>
        <OptionsNavBar linkAdd={"/employees/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
