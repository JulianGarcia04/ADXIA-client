import React from "react";
import View from "./View";
import useModal from "~/hooks/useModal";

function PersonCard({ img, title, subtitle, options, children }) {
  const { isOpen, showModal } = useModal();

  return (
    <View
      img={img}
      title={title}
      subtitle={subtitle}
      options={options}
      modalState={isOpen}
      changeModalState={showModal}
    >
      {children}
    </View>
  );
}

export default PersonCard;
