import React, { useId } from "react";
import { Formik, Form } from "formik";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import styles from "./edit.module.scss";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import ImageField from "~/components/ImageField/ImageField";
import TextField from "~/components/TextField/TextField";
import createEdit from "~/validators/Employee/create-edit";

function Id() {
  const idForm = useId();
  return (
    <PrincipalLayout title={"Editar empleado"}>
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
        validationSchema={createEdit}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form id={`${idForm}-editClient`} className={styles.form}>
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
          title={"Guardar cambios"}
          type="submit"
          height={"45%"}
          form={`${idForm}-editClient`}
        />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Id;