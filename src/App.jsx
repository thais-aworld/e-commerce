import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SearchPage from './pages/SearchPage/SearchPage';
import CartPage from './pages/CartPage/CartPage'; 
import MyOrdersPage from './pages/MyOrdersPage/MyOrdersPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import ProductOptions from './components/ProductOptions/ProductOptions';
import BuyBoxPage from './components/BuyBox/BuyBox'; 
import Gallery from './components/Gallery/Gallery';
import FilterGroup from './components/FilterGroup/FilterGroup';


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/busca" element={<SearchPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
        <Route path="/product/:id/options" element={<ProductOptions />} />
        <Route path="/product/:id/buybox" element={<BuyBoxPage />} /> 
        <Route path="/filters" element={<FilterGroup />} />
        <Route path="gallery" element={<Gallery images={[
      '/images/K-Swiss V8 - Masculino.png',
      '/images/K-Swiss V8 - Masculino.png',
      '/images/K-Swiss V8 - Masculino.png',
      ]} />}
       />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
