import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Importe o hook useAuth
import logo from '../assets/logoccv.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const { userData, logout } = useAuth(); // Obtendo os dados de autenticação do contexto

  // Função para verificar se o usuário está autenticado
  const isAuthenticated = userData.token !== null;

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <span className="logo-text">Coletivo Camara Vermelha</span>
      </div>
      <div className="nav-right">
        {isAuthenticated ? (
          <div className="dropdown">
            <div className="dropdown-content">
              <Link to="/NotFound" className="nav-button">Página 1</Link>
              <Link to="/NotFound" className="nav-button">Página 2</Link>
              <Link to="/NotFound" className="nav-button">Página 3</Link>
              <Link to="/NotFound" className="nav-button">Página 4</Link>
              <button className="nav-button" onClick={logout}>Logout</button>
            </div>
          </div>
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
