import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProductListing from '../../components/ProductListing/ProductListing';

import './HomePage.css';

const slides = [
  '/images/home-slide-1.png',
  '/images/home-slide-2.png',
  '/images/home-slide-3.png',
];

const highlightedCollections = [
  { id: 1, name: 'Novo drop Supreme', imageUrl: '/images/collection-1.png', link: '/products?category=supreme' },
  { id: 2, name: 'Coleção Adidas', imageUrl: '/images/collection-2.png', link: '/products?category=adidas' },
  { id: 3, name: 'Novo Beats Bass', imageUrl: '/images/collection-3.png', link: '/products?category=beats' },
];

const iconCollections = [
  { id: 1, name: 'Camisetas', iconUrl: '/icons/tshirt-icon.svg', link: '/products?category=camisetas' },
  { id: 2, name: 'Calças', iconUrl: '/icons/pants-icon.svg', link: '/products?category=calcas' },
  { id: 4, name: 'Fones', iconUrl: '/icons/headphones-icon.svg', link: '/products?category=fones' },
  { id: 5, name: 'Tênis', iconUrl: '/icons/sneakers-icon.svg', link: '/products?category=tenis' },
];

const trendingProducts = [
  { id: 1, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 2, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 3, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 4, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 5, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 6, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 7, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
  { id: 8, name: 'K-Swiss V8 - Masculino', brand: 'K-Swiss', originalPrice: 400, currentPrice: 280, discount: 30, imageUrl: '/images/K-Swiss V8 - Masculino.png' },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page-container">

      <section className="main-banner-section content-wrapper">
        <div className="main-banner-content">
          <span className="main-banner-subtitle">MELHORES OFERTAS PERSONALIZADAS</span>
          <h1 className="main-banner-title">
            Queima de estoque Nike <span>🔥</span>
          </h1>
          <p className="main-banner-description">
            Só aqui você encontra produtos exclusivos com desconto e pelos melhores preços. 
            Até Em Oferta off. Confira! Da Nike para você. Para atletas.
          </p>
          <Link to="/products?brand=nike&offer=true" className="main-banner-button btn-primary">
            Ver Ofertas
          </Link>
        </div>

        <div className="main-banner-image-container">
          {slides.map((slideUrl, index) => (
            <img
              key={index}
              src={slideUrl}
              alt={`Slide ${index + 1}`}
              className={`main-banner-image ${index === currentSlide ? 'active' : ''}`}
            />
          ))}

          <div className="main-banner-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="highlighted-collections-section content-wrapper">
        <h2 className="section-title">Coleções em destaque</h2>
        <div className="highlighted-collections">
          {highlightedCollections.map(({ id, name, imageUrl, link }) => (
            <Link key={id} to={link}>
              <img src={imageUrl} alt={name} className="collection-image" />
            </Link>
          ))}
        </div>
      </section>

      <section className="collections-icons-section content-wrapper">
        <h2 className="section-title">Coleções em destaque</h2>
        <div className="collections-icons">
          {iconCollections.map(({ id, name, iconUrl, link }) => (
            <Link key={id} to={link} className="collection-icon-item">
              <img src={iconUrl} alt={name} />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="product-listing-section content-wrapper">
        <div className="section-header">
          <h2>Produtos em alta</h2>
          <Link to="/products?sort=trending" className="see-all-link">Ver todos</Link>
        </div>
        <ProductListing products={trendingProducts} />
      </section>

      <section className="fashion-highlight-section content-wrapper">
        <div className="fashion-highlight-image-wrapper">
          <div className="fashion-highlight-circle" />
          <img src="/icons/Laye 1.png" alt="Air Jordan" className="fashion-highlight-main-image" />
        </div>

        <div className="fashion-highlight-content">
          <span className="fashion-highlight-subtitle">DESTAQUE FASHION</span>
          <h2 className="fashion-highlight-title">Air Jordan edição de colecionador</h2>
          <p className="fashion-highlight-description">
            Experimente o legado de Michael Jordan com o Nike Air Jordan, um símbolo de estilo e desempenho. Combine moda e funcionalidade com um design que atravessa gerações e continua a ser um dos tênis mais desejados do mundo.
          </p>
          <Link to="/products?category=airjordan" className="fashion-highlight-button btn-secondary">
            Ver Ofertas
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
