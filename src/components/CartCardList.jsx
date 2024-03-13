import React from 'react';
import CartCard from '../components/CartCard';

const CartCardList = ({ products }) => {
  return (
    <div className="cart-products-list ">
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartCardList;
