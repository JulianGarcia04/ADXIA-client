import React from "react";
import View from "./View";
import useModal from "~/hooks/useModal";

function PersonCard({ options, idPerson, employee }) {
  const { isOpen, showModal } = useModal();

  return (
    <View
      options={options}
      modalState={isOpen}
      changeModalState={showModal}
      idPerson={idPerson}
      employee={employee}
    />
  );
}

export default PersonCard;
