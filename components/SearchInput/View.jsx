import React from 'react';
import {Field, ErrorMessage, Form} from 'formik';
import { Search } from 'react-feather';
import style from './styles.module.scss';

function View({placeholder, submit}) {
  return (
    <Form onChange={submit} className={style.formSearch}>
        <Search color='#ffff' width={25} height={25} className={style.iconSearch}/>
        <Field type='text' name={'paramSearch'} placeholder={placeholder} className={style.input}/>
    </Form>
  )
}

export default View