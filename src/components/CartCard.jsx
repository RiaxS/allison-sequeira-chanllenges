import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" cart-card">
      <img
        className="cart-card-image"
        src={`src/assets/images/${product.image}`}
        alt=""
      />
      <div className="cart-card-container">
        <div className=" cart-card-title">
          <p className=" cart-card-name">
            <strong>{product.name}</strong>
          </p>
        </div>
        <p className="cart-card-description">{product.shortDesc}</p>
      </div>
      <div className="price-btn">
        <div className="quantity-button cart-quantity-button">
          <button className="minus-button" onClick={decrementQuantity}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="max-button" onClick={incrementQuantity}>
            +
          </button>
        </div>

        {/* <div>
          <button className="button-add">Agregar</button>
        </div> */}
      </div>
      <div className="cart-price-container">
        <p className="cart-card-price">
          <strong>₡{product.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartCard;
