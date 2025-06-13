import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BuyBox.css';

const mockProducts = [ /* ...dados iguais... */ ];

const BuyBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === id);

  if (!product) return null;

  const price = product.priceDiscount ?? product.price;

  return (
    <div className="buybox">
      <h2>Compra: {product.name}</h2>
      <p>Preço: R$ {price.toFixed(2).replace('.', ',')}</p>
      <button onClick={() => navigate('/cart')}>Ir ao carrinho</button>
    </div>
  );
};

export default BuyBox;
