import React, { useId } from "react";
import PrincipalLayout from "~/layout/PrincipalLayout";
import ProductCard from "~/components/ProductCard/ProductCard";
import TextField from "~/components/TextField/TextField";
import NavBar from "~/components/NavBar/NavBar";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as yup from "yup";
import style from "./styles/id.module.scss";

function Id() {
  const router = useRouter();
  const id = useId();
  return (
    <PrincipalLayout title={"Agregar cantidad"}>
      <ProductCard border />

      <Formik
        initialValues={{
          cantidad: "",
          unidPrice: "",
          totalPrice: "",
        }}
        validationSchema={yup.object({
          cantidad: yup.number().positive(),
          unidPrice: yup.number().positive(),
          totalPrice: yup.number().positive(),
        })}
        onSubmit={(values)=>{
          console.log(values);
        }}
      >
        {() => (
          <Form className={style.form} id={useId + "-quantityForm"}>
            <TextField title={"Cantidad"} type={"number"} name={"cantidad"} />
            <TextField title={"Precio unidad"} name={"unidPrice"} disabled />
            <TextField
              title={"Precio total"}
              type="number"
              name={"totalPrice"}
              readOnly
            />
          </Form>
        )}
      </Formik>
      <NavBar>
        <ButtonsNavBar
          title={"Agregar producto"}
          height={"50%"}
          type={"submit"}
          form={useId + "-quantityForm"}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Id;
