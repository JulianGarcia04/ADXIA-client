import React from "react";
import PersonCard from "../PersonCard/PersonCard";
import OptionsModalCard from "../OptionsModalCard/OptionsModalCard";
import { Edit3, Trash } from "react-feather";

function View({ idClient, img, name, place, options }) {
  return (
    <PersonCard img={img} title={name} subtitle={place} options={options}>
      <OptionsModalCard
        icon={<Edit3 width={27} height={27} />}
        href={`/clients/edit/${idClient}`}
        message={"Editar cliente"}
      />
      <OptionsModalCard
        icon={<Trash width={27} height={27} />}
        message={"Eliminar cliente"}
      />
    </PersonCard>
  );
}

export default View;
