// ClientRegistration.tsx
import React from 'react';

const ClientRegistration: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        {/* Campos do formulário */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded px-3 py-2 w-full"
            placeholder="Nome do Cliente"
            required
          />
        </div>
        {/* Adicione mais campos conforme necessário */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default ClientRegistration;
