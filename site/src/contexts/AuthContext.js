import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (formData) => {
    try {
      // Substitua esta chamada fetch pela sua lógica de autenticação real
      const response = await fetch('cliente/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      const authToken = data.token; // Supondo que o token retornado pelo backend seja chamado de "token"
      
      localStorage.setItem('token', authToken);
      setToken(authToken);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
