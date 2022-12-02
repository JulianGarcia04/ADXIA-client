import React from "react";
import View from "./View";

function ClientCard({ idClient, img, name, place }) {
  return <View idClient={idClient} img={img} name={name} place={place} />;
}

export default ClientCard;
