import React from "react";
import Link from "next/link";
import PrincipalLayout from "~/layout/PrincipalLayout";
import SearchInput from "~/components/SearchInput/SearchInput";
import styles from "./styles/product.module.scss";
import ProductCard from "~/components/ProductCard/ProductCard";

function Index() {
  return (
    <PrincipalLayout
      title={"Seleccionar producto"}
      color={"#fff"}
      header={<SearchInput placeholder={"Buscar producto"} />}
      className={styles.searchHeader}
    >
      <div className={styles.productListContainer}>
        <Link href="/orders/add/product/1">
          <div className={styles.preDiv}>
            <ProductCard />
          </div>
        </Link>
        <Link href="/orders/add/product/2">
          <div className={styles.preDiv}>
            <ProductCard />
          </div>
        </Link>
        <Link href="/orders/add/product/3">
          <div className={styles.preDiv}>
            <ProductCard />
          </div>
        </Link>
        <Link href="/orders/add/product/4">
          <div className={styles.preDiv}>
            <ProductCard />
          </div>
        </Link>
      </div>
    </PrincipalLayout>
  );
}

export default Index;
