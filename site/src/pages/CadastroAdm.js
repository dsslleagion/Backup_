import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Button from '../components/Button';
import './Cadastro.css';

const CadastroAdm = () => {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    sexo: '',
    telefone: '',
    bairro: '',
    endereco: '',
    cidade: '',
    cep: '',
    redes_sociais: '',
    password: '',
    profile: 'user' // Definindo o perfil como "user" por padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...formData } = formValues;
    fetch('http://localhost:3001/cliente/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Dados cadastrados com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao cadastrar os dados:', error);
    });
  };

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <h1 className="title">Cadastro</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select
              id="sexo"
              name="sexo"
              value={formValues.sexo}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formValues.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={formValues.bairro}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formValues.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formValues.cidade}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formValues.cep}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="redes_sociais">Rede Social Mais Utilizada:</label>
            <select
              id="redes_sociais"
              name="redes_sociais"
              value={formValues.redes_sociais}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile">Perfil:</label>
            <select
              id="profile"
              name="profile"
              value={formValues.profile}
              onChange={handleChange}
            >
              <option value="user">Usuário</option>
              <option value="adm">Administrador</option>
            </select>
          </div>
          <Button type="submit" text="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default CadastroAdm;
