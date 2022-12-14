import React from "react";
import View from "./View";

function SelectField({defaultValue, options, field, form}) {
  return (
    <View 
      defaultValue={defaultValue}
      options={options} 
      field={field}
      form={form}/>
  )
}

export { SelectField };
