import React from "react";
import View from "./View";

function Button({ title, type, form, disabled, onClick }) {
  return (
    <View
      title={title}
      type={type}
      form={form}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export default Button;
