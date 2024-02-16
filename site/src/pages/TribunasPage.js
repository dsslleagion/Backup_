// TribunasPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TribunasPage.css';

const TribunasPage = () => {
  return (
    <div className="tribunas-page">
      <h1>Tribunas</h1>
      <div className="tribuna">
        <h2>Educação</h2>
        <p>Descrição breve sobre a tribuna de Educação.</p>
        <Link to="/tribuna/educacao">Ver detalhes</Link>
      </div>
      <div className="tribuna">
        <h2>Saúde</h2>
        <p>Descrição breve sobre a tribuna de Saúde.</p>
        <Link to="/tribuna/saude">Ver detalhes</Link>
      </div>
      {/* Adicione mais tribunas conforme necessário */}
    </div>
  );
};

export default TribunasPage;
