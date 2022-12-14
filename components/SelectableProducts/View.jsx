import React from "react";
import styles from "./styles.module.scss";
import ProductCard from "~/components/ProductCard/ProductCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";

function View({ products, onSelectProduct }) {
  return (
    <div className={styles.products}>
      {(products && products.length === 0) ? 
      <NothingMessage message="No hay productos para seleccionar"/> : null}
      {products ? products.map((product)=> (
        <ProductCard 
          key={product.id} 
          productData={product} 
          onClick={()=> onSelectProduct(product)}/>
      )): null}
    </div>
  )
}

export default View;
