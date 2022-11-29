import React, { useId } from "react";
import { Formik, Form } from "formik";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import styles from "./edit.module.scss";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import ImageField from "~/components/ImageField/ImageField";
import TextField from "~/components/TextField/TextField";

function Id() {
  const idForm = useId();
  return (
    <PrincipalLayout title={"Editar cliente"}>
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
          <Form id={`${idForm}-editUser`} className={styles.form}>
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
          title={"Guardar cambios"}
          type="submit"
          height={"45%"}
          form={`${idForm}-editUser`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Id;
