import React from "react";
import CartCardList from "../components/CartCardList";
import products from '../products.json'; 

function Cart() {
  return (
    <>
      <div>
        <p>carrito</p>
        <CartCardList products={products.products} />
      </div>
    </>
  );
}

export default Cart;
