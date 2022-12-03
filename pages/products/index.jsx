import React from "react";
import NavBar from "~/components/NavBar/NavBar";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import ProductCard from "~/components/ProductCard/ProductCard";
import SearchInput from "~/components/SearchInput/SearchInput";
import PrincipalLayout from "~/layout/PrincipalLayout";
import styles from "./products.module.scss";

function Index() {
  return (
    <PrincipalLayout
      title={"Listado de productos"}
      color={"#ffff"}
      className={styles.searchHeader}
      header={<SearchInput placeholder={"Buscar producto"} />}
    >
      <section className={styles.productListContainer}>
        <ProductCard idProduct={1}  options/>
        <ProductCard idProduct={2}  options/>
        <ProductCard idProduct={3}  options/>
        <ProductCard idProduct={4}  options/>
      </section>
      <NavBar>
        <OptionsNavBar linkAdd={"/products/add"} />
      </NavBar>
    </PrincipalLayout>
  );
}

export default Index;
