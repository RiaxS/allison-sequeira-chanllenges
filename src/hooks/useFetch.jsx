import React, { useEffect, useState } from "react";
import products from "../products.json";

function useFecth() {
  const [data, setData] = useState([]);

  

  function getProducts() {
    try {
      setData(products);
    } catch (error) {
      console.error(error);
    }
  }
//   function getProduct(id) {
//     try {
//         if(data) {

//         }
//     } catch (error) {
//         console.error(error);
        
//     }
//   }



  useEffect(() => {
    getProducts();
  }, []);

  return {
    data,
  };


  
}

export default useFecth;
