import React from "react";
import styles from "./styles.module.scss";
import ProductCard from "~/components/ProductCard/ProductCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";

function View({ products }) {
  return (
    <div className={styles.products}>
      {(products && products.length === 0) ? 
      <NothingMessage message="No hay productos"/> : null}
      {products ? products.map((product)=> (
        <ProductCard key={product.id} productData={product} options/>
      )): null}
    </div>
  )
}

export default View;
