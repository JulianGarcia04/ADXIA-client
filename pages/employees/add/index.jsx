import React, { useId } from "react";
import { Formik, Form } from "formik";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import styles from "./add.module.scss";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import ImageField from "~/components/ImageField/ImageField";
import TextField from "~/components/TextField/TextField";
import {createValidator} from "~/modules/employees/validators";

function Index() {
  const idForm = useId();
  return (
    <PrincipalLayout title={"Nuevo empleado"}>
      {/* Create form */}
      <Formik
        initialValues={{
          urlImage: "",
          name: "",
          lastname: "",
          nroDoc: "",
          birthdate: "",
          email: "",
        }}
        validationSchema={createValidator}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form id={`${idForm}-createEmployee`} className={styles.form}>
            <ImageField alt="image profile of a employee" />
            <TextField title={"Nombres"} type={"text"} name={"name"} />
            <TextField title={"Apellidos"} type={"text"} name={"lastname"} />
            <TextField
              title={"Número de documento"}
              type={"number"}
              name={"nroDoc"}
            />
            <TextField title={"Fecha de nacimiento"} type={'date'} name={"birthdate"} />
            <TextField title={"Correo electronico"} type={"email"} name={"email"} />
          </Form>
        )}
      </Formik>
      {/*Nav Bar with options */}
      <NavBar>
        <ButtonsNavBar
          title={"Crear"}
          type="submit"
          height={"45%"}
          form={`${idForm}-createEmployee`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;