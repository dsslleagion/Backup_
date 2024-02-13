import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'; // Importe a página de Login
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider

function App() {
  return (
    <Router>
      <AuthProvider> {/* Envolve a aplicação com o AuthProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} /> {/* Adiciona a rota para a página de login */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
