import React, { useId, useState } from "react";
import { Formik, Form } from "formik";
import PrincipalLayout from "~/layout/PrincipalLayout";
import NavBar from "~/components/NavBar/NavBar";
import styles from "./edit.module.scss";
import ButtonsNavBar from "~/components/ButtonsNavBar/ButtonsNavBar";
import ImageField from "~/components/ImageField/ImageField";
import TextField from "~/components/TextField/TextField";
import CreateEdit from "~/validators/Product/Create-Edit";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { agent } from "~/agent";
import { ErrorModal } from "~/components/ErrorModal/ErrorModal";
import Loading from "~/components/Loading/Loading";
import { FormSkeleton } from "~/components/FormSkeleton/FormSkeleton";

function Id(props) {
  const idForm = useId();

  const router = useRouter();

  const productId = props.productId;

  const [changedForm, setChangedForm] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [openedModalError, setOpenedModalError] = useState(false);

  const queryClient = useQueryClient();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: ()=> agent.Product.getById(productId)
  })

  const updateProductMutation = useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: async (data)=> {
      let imageURL = product.imageURL;

      if(image) {
        imageURL = await agent.Image.upload(image).url;
      }

      await agent.Product.update({...product,...data, imageURL});
    },
    onSuccess: ()=> {
      queryClient.invalidateQueries("products");

      router.back();
    },
    onError: (requestError)=> {
      const error = requestError.response.data;

      setError(error);
      
      setOpenedModalError(true);
    }
  })

  return (
    <PrincipalLayout title={"Editar producto"}>
      {/* Create form */}
      <ErrorModal 
        message={error ? error.message : null} 
        visible={openedModalError} 
        onClose={()=> setOpenedModalError(false)}/>
      <Loading 
        label="Guardando cambios" 
        visible={updateProductMutation.isLoading}/>
      {isLoading ? 
      <FormSkeleton/> :
      <Formik
        initialValues={{
          name: product.name,
          brand: product.brand,
          avaliableQuantity: product.avaliableQuantity,
          price: product.price,
          description: product.description,
          grammage: product.grammage
        }}
        validationSchema={CreateEdit}
        onSubmit={(values) => {
          if(!updateProductMutation.isLoading) {
            updateProductMutation.mutate({
              name: values.name,
              brand: values.brand,
              avaliableQuantity: values.avaliableQuantity,
              price: values.price,
              description: values.description,
              grammage: values.grammage
            })
          }
        }}
      >
        {({errors}) => (
          <Form id={`${idForm}-editProduct`} className={styles.form}
          onChange={()=> setChangedForm(true)}
          style={{width: "100%", display: "flex", flexDirection: "column", gap: "12px"}}>
            <ImageField 
              alt="product image" 
              src={product.imageURL}
              onImage={(image)=> setImage(image)}/>
            <TextField title={"Nombre"} type={"text"} name={"name"} />
            <TextField title={"Marca"} type={"text"} name={"brand"} />
            <TextField title={"Cantidad disponible"} type={"number"} name={"avaliableQuantity"} />
            <TextField title={"Precio"} type={"number"} name={"price"} />
            <TextField title={"Descripcion"} type={"text"} name={"description"} />
            <TextField title={"Gramaje (g)"} type={"number"} name={"grammage"} />
            <NavBar>  
              <ButtonsNavBar
                title={"Guardar"}
                type="submit"
                height={"45%"}
                disabled={!changedForm || Object.keys(errors).length}
                form={`${idForm}-editProduct`}
              />
            </NavBar>
          </Form>
        )}
      </Formik>}
      {/*Nav Bar with options */}
    </PrincipalLayout>
  );
}

export default Id;

export const getServerSideProps = (ctx)=> {

  return {props: {productId: ctx.params.id}};
}
