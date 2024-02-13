// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoccv.png';

const NavigationBar = () => {
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
      <Link to="/cadastro" className="bg-red-600 text-white px-4 py-2 rounded">
        Criar Cadastro
      </Link>
    </nav>
  );
};

export default NavigationBar;
