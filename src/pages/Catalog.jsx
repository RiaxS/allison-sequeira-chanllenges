import React from "react";
import ProductList from "../components/ProductList";
import products from '../products.json'; 

function Catalog() {
  return (
    <>
      <ProductList products={products.products} />
    </>
  );
}

export default Catalog;
