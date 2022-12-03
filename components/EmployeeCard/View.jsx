import React from "react";
import PersonCard from "../PersonCard/PersonCard";
import OptionsModalCard from "../OptionsModalCard/OptionsModalCard";
import { Shield, Edit3, Trash } from "react-feather";

function View({idEmployee, img, name, position}) {
  return (
    <PersonCard img={img} title={name} subtitle={position} options>
      <OptionsModalCard
        href={`/employees/access/${idEmployee}`}
        icon={<Shield width={27} height={27} />}
        message="Credenciales de acceso"
      />
      <OptionsModalCard
        href={`/employees/edit/${idEmployee}`}
        icon={<Edit3 width={27} height={27} />}
        message="Editar empleado"
      />
      <OptionsModalCard
        icon={<Trash width={27} height={27} />}
        message="Eliminar empleado"
      />
    </PersonCard>
  );
}

export default View;
