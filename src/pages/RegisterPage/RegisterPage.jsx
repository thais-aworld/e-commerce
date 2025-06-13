import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = formData;

    if (!name || !email || !password || !password2) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!email.includes('@')) {
      setError('E‑mail inválido.');
      return;
    }

    if (password !== password2) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');
    console.log('Registrado:', formData);
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h1>Cadastre-se</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E‑mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirme a senha"
          value={formData.password2}
          onChange={handleChange}
          required
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Registrar</button>
      </form>
      <p className="alt-action">
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
