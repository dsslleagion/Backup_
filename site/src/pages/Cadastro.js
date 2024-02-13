import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Button from '../components/Button';

const Cadastro = () => {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    sexo: '', // Adicionando sexo como um campo vazio inicialmente
    telefone: '',
    bairro: '',
    endereco: '',
    cidade: '',
    cep: '',
    redes_sociais: '',
    password: '',
    profile: 'user' // Definindo o valor padrão do campo profile
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remover o campo confirmPassword dos dados do formulário antes de enviar para o backend
    const { confirmPassword, ...formData } = formValues;
    // Enviar os dados do formulário para o backend
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
      // Se necessário, faça algo com a resposta do backend, como redirecionar o usuário
    })
    .catch(error => {
      console.error('Erro ao cadastrar os dados:', error);
    });
  };

  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sexo" className="block text-gray-700 font-bold mb-2">Sexo:</label>
            <select
              id="sexo"
              name="sexo"
              value={formValues.sexo}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Telefone" className="block text-gray-700 font-bold mb-2">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formValues.telefone}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bairro" className="block text-gray-700 font-bold mb-2">Bairro:</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={formValues.bairro}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endereco" className="block text-gray-700 font-bold mb-2">Endereço:</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formValues.endereco}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cidade" className="block text-gray-700 font-bold mb-2">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formValues.cidade}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cep" className="block text-gray-700 font-bold mb-2">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formValues.cep}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="redes_sociais" className="block text-gray-700 font-bold mb-2">Redes Sociais:</label>
            <input
              type="text"
              id="redes_sociais"
              name="redes_sociais"
              value={formValues.redes_sociais}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>

          
          
          
          {/* Repita o código acima para cada campo de texto */}
          {/* Adicione mais campos conforme necessário */}
          <Button type="submit" text="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
