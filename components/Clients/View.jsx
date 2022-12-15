import React from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import ClientCard from "~/components/ClientCard/ClientCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";

function View({clients}) {

  const router = useRouter();

  return (Array.isArray(clients) && clients.length) ?
    <div className={styles.clients}>
      {clients.map((client)=> (
        <ClientCard 
          key={client.id} 
          clientData={client} 
          options 
          onClick={()=> router.push(`/clients/view/${client.id}`)}/>
      ))}
    </div> :
    <NothingMessage message="No hay clientes"/>
}

export default View;
