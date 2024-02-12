// NewsFeed.tsx
import React from 'react';

const NewsFeed: React.FC = () => {
  const news = [
    { id: 1, title: 'Notícia 1', content: 'Conteúdo da Notícia 1' },
    { id: 2, title: 'Notícia 2', content: 'Conteúdo da Notícia 2' },
    // Adicione mais notícias conforme necessário
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Feed de Notícias</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id} className="mb-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
