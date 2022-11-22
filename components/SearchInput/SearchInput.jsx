import React from 'react';
import { Formik } from 'formik';
import View from './View';

function SearchInput({placeholder}) {
  return (
    <Formik
      initialValues={{
        paramSearch: ''
      }}
      onSubmit={(value)=>{
        console.log(value);
      }}
    >
      {({handleSubmit})=>{
        return(
          <View placeholder={placeholder} submit={handleSubmit}/>
        )
      }}
    </Formik>
  )
}

export default SearchInput