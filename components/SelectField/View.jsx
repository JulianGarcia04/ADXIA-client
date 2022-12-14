import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

const Select = dynamic(()=> import('react-select'), { ssr: false });

function View({defaultValue, options, field, form}) {
  return (
    <Select
      name={field.name}
      classNames={{
        control: ()=> styles.selectableControl
      }}
      classNamePrefix="select"
      isSearchable={false}
      options={options}
      defaultValue={defaultValue}
      value={options ? options.find(option => option.value === field.value) : ''}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
    /> 
  )
}

export default View;
