import React, { useId } from "react";
import PrincipalLayout from "~/layout/PrincipalLayout";
import TextField from "~/components/TextField/TextField";
import { Form, Formik } from "formik";
import NavBar from "~/components/NavBar/NavBar";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import styles from "./add.module.scss";
import ImageField from "~/components/ImageField/ImageField";
import TextAreaField from "~/components/TextAreaField/TextAreaField";

function Index() {
  const idForm = useId();

  return (
    <PrincipalLayout title={"Nuevo producto"}>
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
            <Form id={`${idForm}-createProduct`} className={styles.form}>
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
          title={"Crear"}
          type="submit"
          height={"45%"}
          form={`${idForm}-createProduct`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
