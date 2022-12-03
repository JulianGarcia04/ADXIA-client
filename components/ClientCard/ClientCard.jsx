import React from "react";
import View from "./View";

function ClientCard({ idClient, img, name, place, isLoading }) {
  return (
    <View
      idClient={idClient}
      img={img}
      name={name}
      place={place}
      isLoading={isLoading}
    />
  );
}

export default ClientCard;
