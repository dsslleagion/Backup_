import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/cliente/login', { // Aqui a função fetch está completa
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
      const authToken = data.token;

      // Armazenar o token no localStorage
      localStorage.setItem('token', authToken);

      // Chamar a função de login com os dados do formulário
      await login(formData);

      // Redirecionar para a página NotFound após o login bem-sucedido
      navigate('/NotFound');
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link></p>
    </div>
  );
};

export default Login;
