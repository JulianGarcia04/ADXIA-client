import React from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import ClientCard from "~/components/ClientCard/ClientCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";

function View({clients}) {

  const router = useRouter();

  return (
    <div className={styles.clients}>
      {(clients && clients.length === 0) ? 
      <NothingMessage message="No hay clientes"/> : null}
      {clients ? clients.map((client)=> (
        <ClientCard 
          key={client.id} 
          clientData={client} 
          options 
          onClick={()=> router.push(`/clients/view/${client.id}`)}/>
      )): null}
    </div>
  )
}

export default View;
