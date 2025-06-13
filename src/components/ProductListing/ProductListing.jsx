import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

const ProductListing = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="no-products-message">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing-grid">
      {products.map((product) => (
        <ProductCard key={product.id || product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
