import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      if (searchTerm.trim()) {
        navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
      }
    }
  };

  return (
    <header className="header-container">
      <div className="header-top content-wrapper">
        <Link to="/" className="logo-link">
          <img src="/icons/logo-header.svg" alt="Digital Store Logo" className="header-logo" />
        </Link>

        <div className="search-area">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="search-input"
          />
          <img src="/icons/search.svg" alt="Search" className="search-icon" onClick={handleSearch} />
        </div>

        <div className="auth-area">
          <Link to="/register" className="auth-link register">Cadastre-se</Link>
          <Link to="/login" className="auth-button login">Entrar</Link>
          <Link to="/cart" aria-label="Carrinho de Compras">
            <img src="/icons/cart.svg" alt="Carrinho de Compras" className="cart-icon" />
          </Link>
        </div>
      </div>

      <nav className="main-navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Produtos</NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Categorias</NavLink>
        <NavLink to="/my-orders" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Meus Pedidos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
