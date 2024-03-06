import React from "react";
import ProductList from "../components/ProductList";
import products from '../products.json'; 
import NavMenu from "../NavMenu/NavMenu";

function Catalog() {
  return (
    <>
      <ProductList products={products.products} />
    </>
  );
}

export default Catalog;
