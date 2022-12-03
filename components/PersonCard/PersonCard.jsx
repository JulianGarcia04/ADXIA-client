import React from "react";
import View from "./View";
import useModal from "~/hooks/useModal";

function PersonCard({ img, title, subtitle, isLoading, options, children }) {
  const { isOpen, showModal } = useModal();

  return (
    <View
      img={img}
      title={title}
      subtitle={subtitle}
      isLoading={isLoading}
      options={options}
      modalState={isOpen}
      changeModalState={showModal}
    >
      {children}
    </View>
  );
}

export default PersonCard;
