import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          className="product-image"
          src={`src/assets/images/${product.image}`}
          alt=""
        />
        <div className="products-text-container">
          <div className="products-title-container">
            <p className="products-text product-name">
              <strong>{product.name}</strong>
            </p>
          </div>
          <p className="products-text product-description">
            {product.shortDesc}
          </p>
        </div>
      </Link>
      <div className="price-btn">
        <p className="products-text product-price">
          <strong>₡{product.price} c/u</strong>
        </p>
        <div>
          <button className="button-add">Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
