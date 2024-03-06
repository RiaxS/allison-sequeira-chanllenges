import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="products-list grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
