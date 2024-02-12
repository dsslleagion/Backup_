import React from 'react';

const NewsCard = ({ title, content }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default NewsCard;
