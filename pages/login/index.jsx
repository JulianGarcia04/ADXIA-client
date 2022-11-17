import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import style from "./login.module.scss";
import TextField from "@/components/TextField/TextField";
import FigureBackground from "@/components/FigureBackground/FigureBackground";
import Figure from '@/assets/images/Group.svg'
import { Formik, Form } from "formik";
import UserModel from '@/models/User/Login';


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
          validationSchema={UserModel}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
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
              <button
                type="submit"
                disabled={isSubmitting}
                className={style.button}
              >
                Ingresar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </DefaultLayout>
  );
}
