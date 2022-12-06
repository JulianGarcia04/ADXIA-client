import React from "react";
import { useQuery } from "react-query";
import { getClients } from '~/modules/client/controllers';
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import SearchInput from "~/components/SearchInput/SearchInput";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import ClientCard from "~/components/ClientCard/ClientCard";
import style from "./clients.module.scss";

export async function getServerSideProps(context){

  return{
    props:{

    }
  }
}

function Index({ clients }) {
  const { data, isLoading, error } = useQuery("clients", {
    initialData: clients,
  });

  return (
    //header
    <PrincipalLayout
      title={"Lista de clientes"}
      className={style.searchHeader}
      color={"#ffff"}
      header={<SearchInput placeholder={"Buscar pedido"} />}
    >
      <div className={style.containerClientList}>
        {data.map((e) => {
          return (
            <ClientCard
              idClient={e.id}
              img={e.urlImage}
              name={`${e.name} ${e.lastname}`}
              place={e.businessPlace}
              key={e.id}
            />
          );
        })}
      </div>
      {/*Navbar*/}
      <NavBar>
        <OptionsNavBar linkAdd={"/clients/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
