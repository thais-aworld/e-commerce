import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return; 
    }
    
    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      navigate('/');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="field-group">
          <label htmlFor="email">E‑mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Entrar</button>

        <p className="alt-action">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;