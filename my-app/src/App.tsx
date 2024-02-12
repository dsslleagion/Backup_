import React from 'react';
import './App.css'; // Remova esta linha
import Layout from './components/Layout'; // Importe seu componente Layout

function App() {
  return (
    <Layout> {/* Use o componente Layout como container principal */}
      <div className="container mx-auto py-8">
        <header className="text-center">
          {/* <img src={logo} className="App-logo mx-auto" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

export default App;
