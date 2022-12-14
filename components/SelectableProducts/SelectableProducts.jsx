import React from "react";
import View from "./View";
import { agent } from "~/agent";
import { useQuery } from "react-query";
import { useOrder } from "~/contexts/orderContext";

function SelectableProducts({onSelectProduct}) {
  const { products: orderProducts } = useOrder();

  let { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async ()=> agent.Product.getList()
  })

  if(products) {
    products = products.filter((product)=> (
      !(orderProducts.some((oProduct)=> oProduct.id === product.id))
    ))
  }

  return (
    <View products={products} onSelectProduct={onSelectProduct}/>
  )
}

export { SelectableProducts };
