import React, { useId } from "react";
import useModal from "~/hooks/useModal";
import PrincipalLayout from "~/layout/PrincipalLayout";
import TextField from "~/components/TextField/TextField";
import { Form, Formik } from "formik";
import NavBar from "~/components/NavBar/NavBar";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import Button from "~/components/Button/Button";
import SubProductForm from "~/components/SubProductForm/SubProductForm";
import {createProductValidator} from '~/modules/products/validators'
import styles from "./add.module.scss";

function Index() {
  const idForm = useId();
  const {isOpen, showModal} = useModal();

  return (
    <PrincipalLayout title={"Nuevo producto"}>
      <section className={styles.principalContainer}>
        <Formik
          initialValues={{ brand: "", name: "" }}
          validationSchema={createProductValidator}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form id={`${idForm}-createProduct`} className={styles.form}>
              <TextField title={"Marca"} type={"text"} name={"brand"} />
              <TextField
                title={"Nombre del producto"}
                type={"text"}
                name={"name"}
              />
            </Form>
          )}
        </Formik>
        {
          isOpen?<SubProductForm changeStateModal={showModal}/>:<Button title={"Añadir una presentación"} type="button" onClick={showModal} />
        }
        
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
