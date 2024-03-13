// import image from "../images/bread.png";
// import React from "react";

// function Details({ product }) {
//   return (
//     <div>
//         ola
//       <img src={image} alt="" />
//       <p className="products-text product-name">
//         <strong>{product.name}</strong>
//       </p>
//       <p className="products-text product-description">{product.description}</p>
//       <p className="products-text product-price">
//         <strong>Price: ${product.price}</strong>
//       </p>
//       <p className="products-text product-availability">
//         {product.availability ? "Available" : "Out of stock"}
//       </p>
//     </div>
//   );
// }

// export default Details;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFecth from "../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useFecth();
  const [productInfo, setProductInfo] = useState({});

  // use effect for find the specific product by id to show on details page
  useEffect(() => {
    if (data?.products) {
      const findProduct = data.products.find(
        (product) => product.id === Number(id)
      );
      setProductInfo(findProduct);
    }
  }, [data]);

  const [quantity, setQuantity] = useState(1); 
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const DropdownMenu = () => {
  //   const [selectedOption, setSelectedOption] = useState(""); // Estado para la opción seleccionada

  //   // Función manejadora de cambio de selección
  //   const handleSelectionChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };
  // };

  return (
    <>
      <div className="details-container">
        <img className="details-image" src={`../src/assets/images/${productInfo.image}`}  alt="" />
        <div className="details-info-container">
          <p className="details-info details-name">
            <strong>{productInfo.name}</strong>
          </p>
          <p className="details-info details-description">
            {productInfo.description}
          </p>
          <p className="details-info details-grams">{productInfo.grams} GR</p>
          <p className="details-info details-price">₡{productInfo.price} c/u</p>
          {/* <p className="details-info details-availability">{productInfo.availability ? "Available" : "Out of stock"}</p> */}
          <div className="button-actions details-buttons">
            <div className="quantity-button">
              <button className="minus-button" onClick={decrementQuantity}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="max-button" onClick={incrementQuantity}>
                +
              </button>
            </div>
            {/* <div>
             <select
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectionChange}
              >
                <option value="">Gramos</option>
                <option value="option1">500gr</option>
                <option value="option2">800gr</option>
              </select>
            </div> */}
            <button className="button-add">Agregar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
