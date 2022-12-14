import React from "react";
import Link from "next/link";
import { Plus, X } from "react-feather";
import styles from "./styles.module.scss";
import { useOrder } from "~/contexts/orderContext";
import ProductCard from "~/components/ProductCard/ProductCard";
import { useRouter } from "next/router";

function View({addHref, editHref}) {
  const { products, setSelectedProduct, deleteProduct } = useOrder();

  const router = useRouter();

  return (
    <div className={styles.productList}>
      <Link href={addHref}>
        <div className={styles.addProduct}>
          <Plus color='#01237A' width={75} height={75}/>
          <span>Agregar producto</span>
        </div>
      </Link>
      {products.map((product)=> (
        <div key={product.id} className={styles.productCard}>
          {console.log(product)}
          <ProductCard 
            productData={{
              ...product, 
              avaliableQuantity: product.quantity
            }}
            onClick={()=> {
              setSelectedProduct({...product, productId: product.productId});

              router.push(editHref);
            }}/>
          <button 
            className={styles.close}
            onClick={()=> deleteProduct(product)}>
            <X className={styles.icon}/>
          </button>
        </div>
      ))}
    </div>
  )
}

export default View;
