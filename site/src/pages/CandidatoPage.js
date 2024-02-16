import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CandidatoPage.css';

const CandidatoPage = () => {
  const { id } = useParams();
  const [candidato, setCandidato] = useState(null);

  // Exemplo de candidato (pode ser substituído por uma chamada à API)
  const exemploCandidato = { id: 1, nome: 'Candidato 1', partido: 'Partido A', cargo: 'Presidente' };

  useEffect(() => {
    // Simulação de busca do candidato pelo ID (pode ser substituído por uma chamada à API)
    setCandidato(exemploCandidato);
  }, [id]);

  if (!candidato) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="candidato-page">
      <h1>{candidato.nome}</h1>
      <p>Partido: {candidato.partido}</p>
      <p>Cargo: {candidato.cargo}</p>
      {/* Adicione mais detalhes do candidato conforme necessário */}
    </div>
  );
};

export default CandidatoPage;
