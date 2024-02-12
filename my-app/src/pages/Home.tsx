// Home.tsx
import React from 'react';
import Layout from '../components/Layout';
import NewsFeed from '../components/NewsFeed';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Feed de Notícias</h1>
        <NewsFeed />
      </div>
    </Layout>
  );
};

export default Home;
