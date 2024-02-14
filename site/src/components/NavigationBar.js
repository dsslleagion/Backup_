// NavigationBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoccv.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();

  // Função para verificar se a página atual é a página de cadastro
  const isCadastroPage = location.pathname === '/cadastro';

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <span className="logo-text">Coletivo Camara Vermelha</span>
      </div>
      <div className="nav-right">
        {isCadastroPage ? (
          <Link to="/login" className="nav-button">
            Fazer Login
          </Link>
        ) : (
          <>
            <Link to="/cadastro" className="nav-button">
              Criar Cadastro
            </Link>
            <Link to="/login" className="nav-button">
              Fazer Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
