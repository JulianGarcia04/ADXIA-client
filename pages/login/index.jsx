import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Formik, Form } from "formik";
import { loginValidator } from "~/modules/employees/validators";
import { loginEmployee } from "~/modules/employees/services";
import { adapterRequest, adapterResponse } from "~/modules/employees/adapter";
import setCookie from "~/modules/utils/setCookie";
import DefaultLayout from "@/layout/DefaultLayout";
import TextField from "@/components/TextField/TextField";
import FigureBackground from "@/components/FigureBackground/FigureBackground";
import Figure from "@/assets/images/Group.svg";
import Button from "~/components/Button/Button";
import style from "./login.module.scss";

export default function Index() {
  const { data, mutate, mutateAsync } = useMutation(loginEmployee);
  const { push } = useRouter();

  const onSubmitEvent = (values) => {
    const dataBody = adapterRequest(values);
    mutate(dataBody, {
      onSuccess:()=>{
        const { token } = adapterResponse(data);
        setCookie("auth", token, 1000 * 60 * 60 * 8);
        push("/home");
      }
    });

  };

  return (
    <DefaultLayout className={style.fatherContainer}>
      <FigureBackground src={Figure} top={35} right={0} />
      <FigureBackground src={Figure} bottom={25} left={0} />
      <div className={style.formContainer}>
        <h6>Ingresar a la plataforma</h6>
        <h1>Hey!! ingresa los siguientes datos para ingresar</h1>
        <Formik
          initialValues={{ nroDoc: "", password: "" }}
          validationSchema={loginValidator}
          onSubmit={onSubmitEvent}
        >
          {(isSubmitting) => (
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
              <Button title={"Ingresar"} type={"submit"} />
            </Form>
          )}
        </Formik>
      </div>
    </DefaultLayout>
  );
}
