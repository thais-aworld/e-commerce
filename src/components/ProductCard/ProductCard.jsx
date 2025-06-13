import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const imageUrl = product.imageUrl.startsWith('/images/')
    ? product.imageUrl
    : `/images/${product.imageUrl}`;

  const id = product.id || encodeURIComponent(product.name);

  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
        {product.discount && (
          <span className="product-card-discount">-{product.discount}% OFF</span>
        )}

        <div className="product-card-image-container">
          <img
            src={imageUrl}
            alt={product.name}
            className="product-card-image"
          />
        </div>

        <div className="product-card-details">
          <p className="product-card-category">
            {product.category || 'Não Classificado'}
          </p>
          
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-brand">{product.brand}</p>

          <div className="product-card-prices">
            {product.originalPrice && (
              <span className="product-card-original-price">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            
            <span className="product-card-current-price">
              R$ {product.currentPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
