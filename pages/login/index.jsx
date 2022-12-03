import React from "react";
import { useMutation } from "react-query";
import DefaultLayout from "@/layout/DefaultLayout";
import TextField from "@/components/TextField/TextField";
import FigureBackground from "@/components/FigureBackground/FigureBackground";
import Figure from '@/assets/images/Group.svg'
import { Formik, Form } from "formik";
import Login from '~/validators/Employee/Login';
import Button from "~/components/Button/Button";
import style from "./login.module.scss";


export default function Index() {
  return (
    <DefaultLayout className={style.fatherContainer}>
      <FigureBackground src={Figure} top={35} right={0}/>
      <FigureBackground src={Figure} bottom={25} left={0}/>
      <div className={style.formContainer}>
        <h6>Ingresar a la plataforma</h6>
        <h1>Hey!! ingresa los siguientes datos para ingresar</h1>
        <Formik
          initialValues={{ nroDoc: "", password: "" }}
          validationSchema={Login}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {(
            isSubmitting
          ) => (
            <Form className={style.form}>
              <TextField
                type="number"
                name="nroDoc"
                title="Número de identidad"
              />
              <TextField
                type="password"
                name="password"
                title="Codigo de acceso"
              />
              <Button title={'Ingresar'} type={'submit'}/>
            </Form>
          )}
        </Formik>
      </div>
    </DefaultLayout>
  );
}
