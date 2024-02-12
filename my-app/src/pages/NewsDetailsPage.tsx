// NewsDetailsPage.tsx
import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

interface NewsParams {
  id: string;
}

const NewsDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Lógica para buscar os detalhes da notícia com o ID especificado

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Detalhes da Notícia {id}</h1>
        {/* Renderize os detalhes da notícia aqui */}
      </div>
    </Layout>
  );
};

export default NewsDetailsPage;
