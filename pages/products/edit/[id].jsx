import React, { useId } from "react";
import PrincipalLayout from "~/layout/PrincipalLayout";
import TextField from "~/components/TextField/TextField";
import { Form, Formik } from "formik";
import NavBar from "~/components/NavBar/NavBar";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import styles from "./edit.module.scss";
import ImageField from "~/components/ImageField/ImageField";
import TextAreaField from "~/components/TextAreaField/TextAreaField";

function Id() {
  const idForm = useId();

  return (
    <PrincipalLayout title={"Editar producto"}>
      <section className={styles.principalContainer}>
        <Formik
          initialValues={{
            brand: "",
            name: "",
            grammage: "",
            description: "",
            quantity: "",
            price: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form id={`${idForm}-editProduct`} className={styles.form}>
              <ImageField alt={"product-image"} />
              <TextField title={"Marca"} type={"text"} name={"brand"} />
              <TextField
                title={"Nombre del producto"}
                type={"text"}
                name={"name"}
              />
              <TextField title={"Gramaje"} type={'number'} name={'grammage'} />
              <TextAreaField title={'Descripción'} name={'description'} rows={4} />
              <TextField title={"Cantidad"} type={'number'} name={'queatity'} />
              <TextField title={"Precio por unidad"} type={'number'} name={"price"} />
            </Form>
          )}
        </Formik>
      </section>
      <NavBar>
        <ButtonsNavBar
          title={"Guardar cambios"}
          type="submit"
          height={"45%"}
          form={`${idForm}-editProduct`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Id;