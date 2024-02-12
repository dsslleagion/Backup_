import React from 'react';
import NavigationBar from '../components/NavigationBar';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const news = [
    { id: 1, title: 'Notícia 1', content: 'Conteúdo da Notícia 1' },
    { id: 2, title: 'Notícia 2', content: 'Conteúdo da Notícia 2' },
    // Adicione mais notícias conforme necessário
  ];

  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Feed de Notícias</h1>
        {news.map((item) => (
          <NewsCard key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
