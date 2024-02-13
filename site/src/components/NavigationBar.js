import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoccv.png'; // Importa a imagem

const NavigationBar = () => {
  return (
    <nav className="bg-red-900 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" /> {/* Usa a imagem importada */}
        <span className="font-bold text-xl">Coletivo Camara Vermelha</span>
      </div>
      <Link to="/cadastro" className="bg-red-600 text-white px-4 py-2 rounded">
        Criar Cadastro
      </Link>
    </nav>
  );
};

export default NavigationBar;
