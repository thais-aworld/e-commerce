import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import './ProductViewPage.css';

const mockProducts = [
  {
    id: 'ultrashot3',
    name: 'Ultrashot 3',
    brand: 'K-Swiss',
    description: `Desenvolvido para jogadores agressivos que precisam de máxima durabilidade e suporte em movimentos laterais.`,
    imageUrl: '/images/K-Swiss V8 - Masculino.png', 
    prices: [
      { site: 'courtsidetennis.com', points: '+15' },
      { site: 'kswiss.com', points: '+15' },
      { site: 'tenniswarehouse-europe.com', points: '+15' },
    ],
    tech: [
      'Surge 7.0 na entressola para retorno de energia',
      '360 Plantar Chassis para estabilização lateral',
      'Dragguard 7.0 no solado para aderência avançada',
      'Garantia de 6 meses no solado',
    ],
  },
];

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = mockProducts.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Produto não encontrado</h2>
        <Link to="/">Voltar à página inicial</Link>
      </div>
    );
  }

  return (
    <div className="product-view-page">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="info-container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <h3>Preços e Pontuação</h3>
        <ul>
          {product.prices.map(({ site, points }) => (
            <li key={site}>
              {site} <strong>{points}</strong>
            </li>
          ))}
        </ul>

        <h3>Tecnologia</h3>
        <ul>
          {product.tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className="buy-button"
          onClick={() => navigate('buy')}
        >
          Comprar agora
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default ProductViewPage;
