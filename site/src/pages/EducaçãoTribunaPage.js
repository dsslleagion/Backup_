// EducaçãoTribunaPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TribunasPage.css';

const EducaçãoTribunaPage = () => {
  return (
    <div className="tribuna-page">
      <h1>Tribuna de Educação</h1>
      <p>
        Detalhes e soluções propostas para a área de Educação.
      </p>
      <Link to="/tribunas">Voltar para Tribunas</Link>
    </div>
  );
};

export default EducaçãoTribunaPage;
