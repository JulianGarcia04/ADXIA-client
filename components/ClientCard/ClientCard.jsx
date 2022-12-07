import React from "react";
import View from "./View";

function ClientCard({ idClient, img, name, place, isLoading, options }) {
  return (
    <View
      idClient={idClient}
      img={img}
      name={name}
      place={place}
      isLoading={isLoading}
      options={options}
    />
  );
}

export default ClientCard;
