import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, content, date }) => {
  return (
    <div className="news-card bg-gray-200 rounded shadow p-4 mb-4">
      <h3 style={{ color: '#000' }} className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-800">{content}</p>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};

export default NewsCard;
