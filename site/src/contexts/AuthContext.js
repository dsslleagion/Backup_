import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem('token') || null,
    cliente: null
  });

  const login = async (email, password) => {
    try {
      const response = await fetch('/cliente/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const { token, ...clienteData } = await response.json();

      localStorage.setItem('token', token);
      setUserData({ token, cliente: clienteData });
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserData({ token: null, cliente: null });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
