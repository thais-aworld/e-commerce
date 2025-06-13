import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;