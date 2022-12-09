import React from "react";
import View from "./View";

function ClientCard({ idClient, img, name, place, options }) {
  return (
    <View
      idClient={idClient}
      img={img}
      name={name}
      place={place}
      options={options}
    />
  );
}

export default ClientCard;
