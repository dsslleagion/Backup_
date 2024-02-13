import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoccv.png';

const NavigationBar = () => {
  const location = useLocation();

  // Função para verificar se a página atual é a página de cadastro
  const isCadastroPage = location.pathname === '/cadastro';

  return (
    <nav className="bg-red-900 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <button style={{ width: '40px', height: '40px', padding: '0', border: 'none', background: 'none' }}>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
          </button>
        </Link>
        <span className="font-bold text-xl">Coletivo Camara Vermelha</span>
      </div>
      {/* Se não estiver na página de cadastro, mostra o botão de cadastro */}
      {!isCadastroPage && (
        <div className="flex">
          <Link to="/cadastro" className="bg-red-600 text-white px-4 py-2 rounded mr-4">
            Criar Cadastro
          </Link>
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded">
            Fazer Login
          </Link>
        </div>
      )}
      {/* Se estiver na página de cadastro, mostra apenas o botão de login */}
      {isCadastroPage && (
        <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded">
          Fazer Login
        </Link>
      )}
    </nav>
  );
};

export default NavigationBar;
