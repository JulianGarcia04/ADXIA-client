import React from "react";
import { useRouter } from "next/router";
import View from "./View";

function ButtonsNavBar({ title, height, onClick, form, type }) {
  const router = useRouter();

  const styles = {
    height,
  };

  const onCancel = () => {
    router.back();
  };
  return (
    <View
      title={title}
      styles={styles}
      onCancel={onCancel}
      onClick={onClick}
      form={form}
      type={type}
    />
  );
}

export default ButtonsNavBar;
