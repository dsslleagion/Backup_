// SaúdeTribunaPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TribunasPage.css';

const SaúdeTribunaPage = () => {
  return (
    <div className="tribuna-page">
      <h1>Tribuna de Saúde</h1>
      <p>
        Detalhes e soluções propostas para a área de Saúde.
      </p>
      <Link to="/tribunas">Voltar para Tribunas</Link>
    </div>
  );
};

export default SaúdeTribunaPage;
