import React, { useId } from "react";
import { Formik, Form } from "formik";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import styles from "./add.module.scss";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import ImageField from "~/components/ImageField/ImageField";
import TextField from "~/components/TextField/TextField";

function Index() {
  const idForm = useId();
  return (
    <PrincipalLayout title={"Nuevo cliente"}>
      {/* Create form */}
      <Formik
        initialValues={{
          urlImage: "",
          name: "",
          lastname: "",
          nroDoc: "",
          tel: "",
          adress: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form id={`${idForm}-createUser`} className={styles.form}>
            <ImageField alt="image profile of a client" />
            <TextField title={'Nombres'} type={'text'} name={'name'}/>
            <TextField title={'Apellidos'} type={'text'} name={'lastname'}/>
            <TextField title={'Número de documento'} type={'number'} name={'nroDoc'}/>
            <TextField title={'Telefono'} type={'tel'} name={'tel'}/>
            <TextField title={'Dirección'} type={'text'} name={'adress'}/>
          </Form>
        )}
      </Formik>
      {/*Nav Bar with options */}
      <NavBar>
        <ButtonsNavBar
          title={"Crear"}
          type="submit"
          height={"45%"}
          form={`${idForm}-createUser`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
