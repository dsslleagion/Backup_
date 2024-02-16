import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logoccv.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const { userData, logout } = useAuth();

  // Verificar se o usuário está autenticado de forma segura
  const isAuthenticated = userData && userData.token;

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <span className="logo-text">Coletivo Camara Vermelha</span>
      </div>
      <div className="nav-right">
        {!isAuthenticated && (
          <>
            <Link to="/cadastro" className="nav-button">
              Criar Cadastro
            </Link>
            <Link to="/login" className="nav-button">
              Fazer Login
            </Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <div className="nav-category">
              <span className="nav-category-title">Cadastros</span>
              <div className="dropdown-content">
                <Link to="/cadastroNoticia" className="nav-link"> Notícias</Link>
                <Link to="/cadastroJornal" className="nav-link"> Jornal</Link>
                <Link to="/cadastroAdm" className="nav-link"> Usuário</Link>
                <Link to="/cadastroCandidato" className="nav-link"> Candidato</Link>
              </div>
            </div>
            <div className="nav-category">
              <span className="nav-category-title">Jornal</span>
              <div className="dropdown-content">
                <Link to="/Jornal" className="nav-link">Cá entre Nós</Link>                
              </div>
            </div>
            <div className="nav-category">
              <span className="nav-category-title">Canditados</span>
              <div className="dropdown-content">
                <Link to="/candidatosPage" className="nav-link">Principal</Link>
              </div>
            </div>
            <div className="nav-category">
              <span className="nav-category-title">Tribunas</span>
              <div className="dropdown-content">
                <Link to="/tribuna/educacao" className="nav-link">Educação</Link>
                <Link to="/tribuna/saude" className="nav-link">Saúde</Link>
                
              </div>
            </div>
            <div className="nav-category">
              <span className="nav-category-title">Perfil</span>
              <div className="dropdown-content">
                 <Link to="/perfil" className="nav-link">Perfil</Link>
                <button className="nav-link" onClick={logout}>Logout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
