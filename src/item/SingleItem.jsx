import React, { useContext } from "react";
import ContextCart from "../cart/ContextCart";

const SingleItem = ({ addToCart, product }) => {
  const { addItem } = useContext(ContextCart);
  return (
    <div key={product.id} className="single-card">
      <img className="card-image" src={product.image} />
      <h4 className="card-title">{product.title}</h4>
      <p className="card-price">${product.price}</p>
      <button className="add-button" onClick={() => addItem(product)}>
        Add +
      </button>
    </div>
  );
};

export default SingleItem;