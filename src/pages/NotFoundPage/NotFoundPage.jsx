import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img 
        src="/images/404.gif" 
        alt="Erro 404 - Página não encontrada" 
        style={{ maxWidth: '100%', height: '300px', marginBottom: '1rem' }}
      />
      <h1>Página não encontrada</h1>
      <Link to="/" style={{ color: '#C92071', textDecoration: 'underline' }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
